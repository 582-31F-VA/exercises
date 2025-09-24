# Exercise: Fetch

One of the things HTTP can do is called **content negotiation**. The
`Accept` request header is used to tell the server what type of
ressource the client would like to get. When a server knows of various
ways to encode a resource, it can look at this header and send the one
that the client prefers.

The URL `https://eloquentjavascript.net/author` is configured to respond
with either plain text, HTML, or JSON, depending on what the client asks
for. These formats are identified by the standardized media types
`text/plain`, `text/html`, and `application/json`.

Using JavaScript, send requests to fetch all three formats of this
resource, and display the responses's body. Use the `headers` property
in the options object passed to `fetch` to set the header named `Accept`
to the desired media type.

Finally, try asking for the media type `application/rainbows+unicorns`
and display which status code that produces.
