import { server } from './server.js';
import supertest from 'supertest';

test('GET /romannumeral returns the correct json object', async () => {
    const requestWIthSupertest = supertest(server);
    const res = await requestWIthSupertest.get("/romannumeral?query=123");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.text).toEqual('{"input":"123","output":"CXXIII"}');
});

test('GET /romannumeral returns 400 and error message when query is empty', async () => {
    const requestWIthSupertest = supertest(server);
    const res = await requestWIthSupertest.get("/romannumeral");
    expect(res.status).toEqual(400);
    expect(res.text).toEqual("\"Missing required parameter 'query'\"");
});

test('GET /romannumeral returns 400 and error message when query is not between 1-3999', async () => {
    const requestWIthSupertest = supertest(server);
    let res = await requestWIthSupertest.get("/romannumeral?query=0");
    expect(res.status).toEqual(400);
    expect(res.text).toEqual("\"Parameter 'query' must be a whole number between 1-3999\"");

    res = await requestWIthSupertest.get("/romannumeral?query=4000");
    expect(res.status).toEqual(400);
    expect(res.text).toEqual("\"Parameter 'query' must be a whole number between 1-3999\"");
});

test('GET /romannumeral returns 400 and error message when query is not a whole number', async () => {
    const requestWIthSupertest = supertest(server);
    const res = await requestWIthSupertest.get("/romannumeral?query=23.4");
    expect(res.status).toEqual(400);
    expect(res.text).toEqual("\"Parameter 'query' must be a whole number\"");
});