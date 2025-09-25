const resPlain = await fetch("https://eloquentjavascript.net/author", {
    headers: { "Accept": "text/plain" },
});
document.body.append(await resPlain.text());

const resHTML = await fetch("https://eloquentjavascript.net/author", {
    headers: { "Accept": "text/html" },
});
document.body.append(await resHTML.text());

const resJson = await fetch("https://eloquentjavascript.net/author", {
    headers: { "Accept": "application/json" },
});
document.body.append(await resJson.text());

const resRainbows = await fetch("https://eloquentjavascript.net/author", {
    headers: { "Accept": "appliction/raibows+unicorns" },
});
document.body.append(String(resRainbows.status));
