# SDLC Capstone — Sprint 1 Process Analysis  

**Course:** Software Quality Assurance  
**Sprint:** Sprint 1  
**Model Selected:** V-Model  
**Submission Type:** Team  
**Due:** End of class Thursday  

---

## Section 1 — Model Selection and Rationale  

**Selected Model:** V-Model  

**Rationale:**  
We did not select Agile because we had a clear and concrete plan for the game by the time we started writing the code. We specifically selected the V-Model instead of Waterfall because we implemented testing during the programming phase. Immediately after developing a portion of the project, we ran tests to ensure the code worked.

---

## Section 2 — Phase Analysis  

### Phase: Requirements Analysis + Acceptance Testing  

**What Sprint 1 produced:**  
We met and decided what requirements we wanted for the game. After deciding the requirements, we determined what inputs would be valid.

**What strict adherence would have looked like:**  
After defining the requirements, we would have created acceptance tests to determine which inputs the game should accept and which should generate errors. These conversations and test plans would be completed before any coding began.

---

### Phase: System Design + System Testing  

**What Sprint 1 produced:**  
There is testing on the application itself. Testing how much of a load it can handle and how it would run on a different application. The Sspecifiedics on creating the structure of the project, being the overlays and how both text fonts and sizes are standardized for the game. 

**What strict adherence would have looked like:**  
We would have fully specified the project structure, including overlays, standardized fonts, font sizes, layout consistency, and documented system-level test cases before implementation.

---

### Phase: Architecture Design + Integration Testing  

**What Sprint 1 produced:**  
We decided how each feature of the code would function together. We defined how the player would lose and how they would gain more aura. After this discussion, coding began.

**What strict adherence would have looked like:**  
First, the team writes tests on what could go wrong when you connect the different features of the game together. Then they start designing how the game would run. Things like what would trigger the player to lose? How can the player gain more aura? How is the player going to cause the loss game trigger? We also thought about how interactions with users would interact with overlays and make sure they don’t overlap when not intended to so those were things that would need to be considered.

---

### Phase: Module Design + Unit Testing  

**What Sprint 1 produced:**  
After writing the code, we tested each feature to ensure it worked correctly. Since we finished early, we added another feature allowing students and the teacher to move sporadically.

**What strict adherence would have looked like:**  
Tests are written to see what can go wrong within each component. Tests are also written on how we can check that each component/ feature is working. Each component is looked into to add more detail, so we can specify what they each do and how they work. Also, to adhere with the model, we wouldn’t have added students and teachers to move sporadically instead of moving left or right only since requirements are set at the start.

---

### Phase: Coding  

**What Sprint 1 produced:**  
Coding occurred throughout multiple phases rather than strictly after design completion. At the end of the sprint, we intentionally added bugs. We tested and submitted the sprint after verifying the bugs caused errors as intended.

**What strict adherence would have looked like:**  
Coding is started begins here and finished after making sure that all of the phases are finished. The requirements, architecture, and module design for the game are pulled from the previous games.

---

## Section 3 — Defect Case Studies  

### Pause Bug  

- The code failed to toggle the pause variable correctly (it did not switch to the opposite value).  
- This bug was intentionally implemented during the testing phase.  
- There was no phase where it was “caught” because it was added intentionally.  
- The cost of catching it late was low since the pause feature was small and non-critical.  

Issue link: https://github.com/number1bidoof/Slepo/issues/2  

Our model could have helped identify this bug if it had not been intentionally introduced.

---

### Sound Bug  

- The Minecraft gaming sound played whenever the space bar was pressed. However, the code never allowed it to toggle on and off. As a result, music played even when the game was not active.  
- This bug was implemented during the implementation phase.  
- It was caught in the maintenance phase after receiving a bug report.  
- The cost of catching it late was very low because it had clear reproduction steps and only affected background music.  

Issue link: https://github.com/number1bidoof/Slepo/issues/3  

Our model could have helped us find this bug, but we did not strictly follow it.

---

## Section 4 — QA Assessment  

**How QA actually operated:**  
QA operated continuously throughout development. Team members rotated roles frequently, and bugs were identified and addressed during creation rather than at formal checkpoints.

**How that compares to the chosen model:**  
In the V-Model, testing activities correspond to each development phase. We did have someone performing QA at all times, which aligns somewhat with the model, but we did not formally separate testing phases.

**What QA would have looked like under strict adherence:**  
If QA operated under strict adherence, A lot of testing would have been done BEFORE the majority of the code was written, yet we were jumping around doing qa, i think that is because we had separate roles daily.
---

## Section 5 — Team Retrospective on Process  

**The Gap:**  
Our testing phase was weaker than what the V-Model prescribes.

**What It Cost the Team:**  
Because we did not strictly follow the V-Model, we released the game with one unintentional bug that should have been caught during testing.

**The One Change for Sprint 2:**  
We will adhere more strictly to the V-Model by creating and documenting tests before implementation to prevent releasing the game with avoidable bugs.

---

## Contributors  
<img width="630" height="215" alt="image" src="https://github.com/user-attachments/assets/f8abc62c-6bfd-4ae9-ae29-b007f4c86d02" />
