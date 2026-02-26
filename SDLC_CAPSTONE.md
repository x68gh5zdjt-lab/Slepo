67 chicken stars
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

> Walk through every phase of your chosen model. For each phase, address two things:  
> 1. What element of Sprint 1 corresponds to this phase (even loosely)?  
> 2. What would this phase have looked like under strict model adherence?  

---

### Phase: Requirements Analysis + Acceptance Testing  

**What Sprint 1 produced:**  
We met and decided what requirements we wanted for the game. After deciding the requirements, we determined what inputs would be valid.

**What strict adherence would have looked like:**  
After defining the requirements, we would have created acceptance tests to determine which inputs the game should accept and which should generate errors. These conversations and test plans would be completed before any coding began.

---

### Phase: System Design + System Testing  

**What Sprint 1 produced:**  
We discussed concepts for the UI and how the game would interact with the user. Since the game is simple, the design was also simple. We included overlays for the start and end of the game, a pause menu, and the main gameplay screen.

**What strict adherence would have looked like:**  
We would have fully specified the project structure, including overlays, standardized fonts, font sizes, layout consistency, and documented system-level test cases before implementation.

---

### Phase: Architecture Design + Integration Testing  

**What Sprint 1 produced:**  
We decided how each feature of the code would function together. We defined how the player would lose and how they would gain more aura. After this discussion, coding began.

**What strict adherence would have looked like:**  
The team would first write integration tests identifying potential failures when connecting features. Then, we would formally design system interactions, including:
- What triggers player loss?
- How does the player gain aura?
- What events cause the loss condition?

---

### Phase: Module Design + Unit Testing  

**What Sprint 1 produced:**  
After writing the code, we tested each feature to ensure it worked correctly. Since we finished early, we added another feature allowing students and the teacher to move sporadically.

**What strict adherence would have looked like:**  
Unit tests would be written before or alongside development to validate each component. Each module would be specified in greater detail to clearly define responsibilities and expected behavior before coding.

---

### Phase: Coding  

**What Sprint 1 produced:**  
Coding occurred throughout multiple phases rather than strictly after design completion. At the end of the sprint, we intentionally added bugs. We tested and submitted the sprint after verifying the bugs caused errors as intended.

**What strict adherence would have looked like:**  
Coding would begin only after completing requirements, architecture, and module design phases. Implementation would strictly follow the documented plans from earlier phases.

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
Under strict V-Model adherence, QA would have been formally structured. Each development phase would have had predefined test plans, documented test cases, and clearly assigned QA roles. Testing would have been planned before coding rather than occurring informally throughout development.

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
