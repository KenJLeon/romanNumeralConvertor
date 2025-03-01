export async function getConverted(query, setter) {
    const res = await fetch(`/romannumeral?query=${query}`)
        .catch((res) => {
            console.log(res);
        });
    if (!res.ok) {
        const error = await res.text();
        alert(error);
        return;
    }
    const data = await res.json();
    setter(data.output);
}