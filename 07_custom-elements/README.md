# Exercise: Custom elements

Implement a `<tabbed-sections>` custom element that transforms the
`<section>` elements it contains into a tabbed interface, similar to
that of a web browser, where only one section is visible at a time.
Developers who use your element should be able set the title of each tab
through the `tab-title` attribute of each section. If a section does not
have a `tab-title` attribute, then the title of its tab should
correspond to the section's position (i.e., the first section gets the
title "1", the second gets the title "2", and so on). Finally, users of
your element can set which section is shown first using the
`default-section` attribute. For instance,
`<tabbed-sections default-section="2">` should show the second section
by default.
