Rewrite Version
## All Grid Space Changes. Position changes for A,B,C,D,E original to new (we’re assuming hover transitions left)

* Scenario 1, X=1, B gets hovered on left
  * Test Case 1
    * largePos = 2
    * A(2) -> (B2) to G4,
    * B(0) ->  G0 to B0, 
    * C(1)-> G1 to G5, so 4*X translate
  * Test Case 2
    * largePos = 6
    * A(6) -> (B6) to G8
    * B(4) -> G4 to B4
    * C(5) -> G5 to G9
  * Rules:
    * + 2, convert letter to G
    * -2, Convert letter to B
    * +3
* Scenario 1, X= -1, B gets hovered on right
  * Test Case 1
    * largePos = 2
    * A -> (B2) to G2,
    * B -> G6 to B4, 
    * C -> G7 to G3, 
  * General Rules
    * If LargePos = 2
    * A = largePos
    * B = A + 1
    * C = A + 2
    * D = A + 3
    * E = A + 4
  * Rules
    * LargePos = 2
    * +0, convert  to G
    * +2, convert to B
    * +1
* Scenario 2, X=1, C gets hovered on left
  * Test Case 1
    * largePos = 2
    * A(2) -> (B2) to G5, 
    * B(0) ->  G0 to G4, so 4*X translate
    * C(1) -> G1 to B0, 
  * Test Case 2
    * largePos = 6
    * A(6) -> (B6) to G9
    * B(4) -> G4 to G8
    * C(5) -> G5 to B4
  * Rules:
    * +3, convert letter to G
    * +2,
    * -2, convert letter to B
    * B gets shifted from left to right
* Scenario 2, X=-1, C gets hovered on right\
  * Test Case 1
    * LargePos = 2
    * A -> (B2) to G3, 
    * B -> G6 to G2, so 4*X translate
    * C -> G7 to B4, 
  * Rules
    * LargePos = 2
    * +1, convert G
    * +0
    * +2, convert B
* Scenario 3, X=2, D gets hovered on left
  * Test Case 1
    * largePos  =6 
    * A(6) -> (B6) to G8,
    * B(4) -> G4 to G6
    * C(5) -> G5 to G9
    * D(2) -> G2 to B2, 
    * E(3) -> G3 to G7, so 2*X translate
  * General rules
    * If largePos = 6
    * A = largePos
    * B = A-2
    * C = A-1
    * D = A-4
    * E = A-3
  * Rules
    * LargePos=6
    * +2, convert to G
    * 0
    * +3
    * -4, Convert to B
    * +1
* Scenario 3, X=-2, D gets hovered on right
  * Test Case 1
    * LargePos = 2
    * A -> B2  to G2, 
    * B -> G6 to G4, 
    * C -> G7 to G3, 
    * D -> G8 to B6, 
    * E -> G9 to G5,
  * Rules
    * largePos = 2
    * Convert to G
    * +2
    * +1
    * +4, convert to B
    * +3
* Scenario 4, X=2, E gets hovered on left
  * Test Case 1
    * largePos = 6
    * A -> B6 to G9, 
    * B -> G4 to G8,
    * C -> G5 to G7, 
    * D -> G2 to G6, 
    * E -> G3 to B2, 
  * Rules
    * LargePos = 6
    * +3, to “G”
    * +2
    * +1
    * 0
    * -4, Convert B
* Scenario 4, X=-2, E gets hovered on right
  * Test Case 1
    * LargePos = 2
    * A -> B2 to G3, 
    * B -> G6 to G2, 
    * C -> G7 to G5, 
    * D -> G8 to to G4
    * E -> G9 to B6,
  * Rules
    * LargePos = 2
    * +1 to “G”
    * +0
    * +3
    * +3
    * +4 to “B”
