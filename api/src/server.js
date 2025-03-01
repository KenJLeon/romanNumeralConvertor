import express from "express";
import { createLogger, format, transports } from "winston";
import { romanNumeralConverter } from "./converterv2.js";

const app = express();

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.errors({ stack: true }),
      format.splat(),
      format.json()),
    defaultMeta: { service: 'roman-numeral-converter' },
    transports: [
        new transports.Console(),
        new transports.File({ filename: 
           'error.log', level: 'error' }),
        new transports.File({ 
            filename: 'combined.log' 
        })
    ]
});

app.set("port", process.env.PORT || 8080);

app.get('/romannumeral', (req, res) => {
    const url = req.originalUrl;
    const param = req.query.query;
    if (!param) {
        logger.error("Missing required parameter 'query'");
        res.status(400).json("Missing required parameter 'query'");
        return;
    }
    logger.info('Request received: "%s"', url);
    if (param.indexOf('.') >= 0) {
        logger.error("Parameter 'query' must be a whole number");
        res.status(400).json("Parameter 'query' must be a whole number")
    }
    const num = parseInt(param);
    if (isNaN(num) || num < 1 || num > 3999) {
        logger.error("Parameter 'query' must be a whole number between 1-3999");
        res.status(400).json("Parameter 'query' must be a whole number between 1-3999");
        return;
    }
    const responseObject = {input: param, output: romanNumeralConverter(num)};
    logger.info('Responded with %j', responseObject);
    res.json(responseObject);
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(app.get("port"), () => {
        logger.info('Server is listening at port:%s}/', app.get("port"));
    });
}

export const server = app;