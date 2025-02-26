//Reference from https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream#examples under the fetch stream example.
export function getConverted(query, setter) {
    fetch(`romannumeral?query=${query}`, {
        method: "GET"
    })
        .then((res) => {
            if (res.ok) {
                return new Response(res.body, { headers: { "Content-Type": "application/json" } }).json();
            }
            throw new Error(res.error);
        })
        .then((result) => {
            setter(result.output);
        })
        .catch((error) => console.log(error));
}