# QA Fix Verification Report

**Game Tested:** Not WECIB Minecraft Simulator  
**Dev Team:** Christopher, Afton, Angel, Marcus P.  
**Date:** 2/16/26  

## Summary
- **Total Bugs from Week 6:** 4  
- **Bugs Verified as Fixed:** 3  
- **Bugs Still Present:** 1
- **Regressions Found:** 0  

## Bug Verification Details
For each bug reported in Week 6, document whether the fix worked.

### 1. Reset Mechanic Not Working
- **Original Issue:** After losing, the play again button doesn’t work  
- **Severity:** **Critical** / High / Medium / Low  
- **Status:** ☐ **Fixed** ☐ Still Present ☐ Partially Fixed  

**Verification Notes:** When you lose it does not allow a loop so the user can play again. Instead, it just goes to the screen the user saw before they lost. Put the location too the start of the game so the user starts there.

### 2. Pause Mechanic Not Actually Pausing Game
- **Original Issue:** Pause does not actually pause the game  
- **Severity:** Critical / **High** / Medium / Low  
- **Status:** ☐ **Fixed** ☐ Still Present ☐ Partially Fixed

 **Verification Notes:** Pausing just doesn't work intended while having the pause overlay on. Fixed by toggling overlay on and pausing on and vice versa when unpausing.

### 3. Sound Effects Not Properly Playing When Intended

- **Original Issue:** New bug reported by QA team  
- **Severity:** Critical / High / Medium / **Low**  
- **Status:** ☐ Fixed ☐ **Still Present** ☐ Partially Fixed  

**Verification Notes:**  When not playing Minecraft, the Minecraft music still plays. Changed the conditional when pausing to include checking if the user was playing Minecraft before pausing.

### 4. People Appearing Multiple Times

- **Original Issue:** Students walking and sitting on desks appear multiple times  
- **Severity:** Critical / High / **Medium** / Low  
- **Status:** ☐ Fixed ☐ **Still Present** ☐ Partially Fixed  

**Verification Notes:**  When playing the game the same character shows multiple times. Unable to fix since we can’t find the root cause.

### 5. Play Time Called Edge Instead of Play Time
- **Original Issue:** Not originally found  
- **Severity:** Critical / High / Medium / **Low**  
- **Status:** ☐ **Fixed** ☐ Still Present ☐ Partially Fixed

**Verification Notes:** Had to change within the .js file because it was continuously getting re

## Overall Assessment
**Game Status After Fixes:** We have our MVP and fixed the bugs found by QA Team. 
 
**Recommendation for Dev Team:** Fix multiple people appearing if needed

## Sign-Off
**QA Team:** Christopher, Afton, Angel, Marcus P.

**Verification completed:** 2/16/26
