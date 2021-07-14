# Preface
Even though Forien's Copy Environment works to copy most settings, some are stored in the browser's local storage. These will *not* be exported via Forien's 
Copy Environment, and it leads to settings changing every time our URL changes when my IP address shifts. Here's a list that I use personally so I know what to
update when settings seem to "revert to default":

- Core --> Left-Click to Release Objects
- Ace Library
- Character Actions List
- Collapsible Journal Sections
- DFreds Droppables
- Drag Ruler
- Easy Target
- Image Hover
- Macro Editor
- Monk's TokenBar
- PDFoundry
- Pings
- Quick Insert (sometimes)
- Tidy5e Sheet

If you want to view these values (in Edge, not sure where they are in other browsers), go to Foundry, log in, hit F12 (developer tools), go to the Application
tab within those tools, and select the "Local Storage" option.

It *is* possible to set those values manually via some JavaScript trickery. I have my own personal script in the refresh-settings.js file, which I copy and
paste in the console of the developer tools to reset values when needed. As you might imagine, this script is different per-person and will depend on your
individual needs.

Overall, the best solution would probably be to have a static domain. That being said, I'm cheap, and I like my current setup :)