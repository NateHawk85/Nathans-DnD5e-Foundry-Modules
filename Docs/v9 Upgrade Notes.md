# What's this about?
I figured making a separate page for upgrade notes would be prudent. There are a variety of great things that were anticipated by v9, however there are some
module shortcomings as well. Here, I'll try to list any main differences between my prior Foundry 0.8.9 setup and the current version.

## Notes
New modules installed:

## Issues
- Token Health: I submitted a pull request to the codebase that may get merged over, but for v0.4.4, enabling this module blocks the "Configure Settings" button
from opening the associated menu. If a new version isn't released by the time you're reading this, fixing this issue is dead simple, and you can do it on your
own server extremely easily. All you have to do is
  - Go to \*your data folder\*/modules/token-health/contrib and open the "settings-extender.js" file.
  - Navigate to line 385. It's towards the bottom. Alternatively, you can search for the following phrase (Ctrl + F in most text editors): 
    `const type = Compatibility.getGameSettting(key).type;`. Add a question mark after `(key)` so that the line reads 
    `const type = Compatibility.getGameSettting(key)?.type;`.
  - Save your file, then load/refresh your Foundry page. You should be able to click the "Configure Settings" button now!
- May need to swap back to CUB concentrator instead of Midi, just so that I can remove DAE
- Strange interaction between CUB/DAE, with new effects causing tokens to not be selectable?

## High Priority Non-Updated Modules
- Combat Utility Belt (creeped on repo and it seems like a fix is on the way for v9-related issues)
- Token Health (fix above)

## Non-Updated Modules
- 