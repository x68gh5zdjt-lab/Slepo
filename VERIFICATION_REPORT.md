# QA Fix Verification Report

**Game Tested:** Not WECIB Minecraft Simulator  
**Dev Team:** Christopher, Afton, Angel, Marcus P.  
**Date:** 2/16/26  

## Summary

- **Total Bugs from Week 6:** 3  
- **Bugs Verified as Fixed:** 3  
- **Bugs Still Present:** 0  
- **Regressions Found:** 0  

## Bug Verification Details

For each bug reported in Week 6, document whether the fix worked.

### 1. Reset Mechanic Not Working

- **Original Issue:** After losing, the play again button doesn’t work  
- **Severity:** **Critical** / High / Medium / Low  
- **Status:** ☐ **Fixed** ☐ Still Present ☐ Partially Fixed  

**Verification Notes:**  
When the player loses, the game does not properly loop to allow the user to play again. Instead, it returns to the screen shown before losing. The fix involved setting the player’s location back to the start of the game so the user begins from the correct starting point.

### 2. Pause Mechanic Not Actually Pausing Game

- **Original Issue:** Pause does not actually pause the game  
- **Severity:** Critical / **High** / Medium / Low  
- **Status:** ☐ Fixed ☐ Still Present ☐ Partially Fixed

### 3. Sound Effects Not Properly Playing When Intended

- **Original Issue:** New bug reported by QA team  
- **Severity:** Critical / High / Medium / Low  
- **Status:** ☐ Fixed ☐ Still Present ☐ Partially Fixed  

**Verification Notes:**  
Minecraft music continued playing even when the user was not playing Minecraft. The fix updated the pause conditional to check whether the user was actively playing Minecraft before allowing the music to continue.

---

### 4. People Appearing Multiple Times

- **Original Issue:** Students walking and sitting on desks appear multiple times  
- **Severity:** Critical / High / Medium / Low  
- **Status:** ☐ Fixed ☐ Still Present ☐ Partially Fixed  

**Verification Notes:**  
While playing the game, the same character appears multiple times. The issue remains unresolved because the root cause has not yet been identified.

---

**Verification Notes:**  
The pause overlay appeared, but the game continued running in the background. This was fixed by properly toggling both the overlay and the game pause state together, and reversing both actions when unpausing.

### 3. Sound Effects Not Properly Playing When Intended

- **Original Issue:** New bug
