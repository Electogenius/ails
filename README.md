# ails
Rather minimalist language.

Implementation of the [Assembly inspired language](https://c.gethopscotch.com/p/118g9bail9)

Only 9 commands:
- add <ln>: adds the number/text from a line to memory
- sub <ln>: subtracts the number from a line from memory
- go <ln>: sends pointer to a line
- multiply <ln>: multiplies the number from a line with the memory
- divide <ln>: divides memory by the number from a line
- get <ln>: sets memory to the number/text in a line
- store <ln>: sets the content in a line to memory
- jump <ln>: sends pointer to a line if memory is not 0 or blank
- output: outputs memory

also there's examples in the example directory