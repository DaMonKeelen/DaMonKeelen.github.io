// Operators

// Assignment operators
/* 
Assignment Operators assigns a value of the right operand to operand 
+= -= *= /+

=... x = y
+=... x += y
-_... x -= y
*=... x *= y
/=... x /= y
%... x %= y


// Arithmetic operators
Arithmetic Operators are used in mathematical expressions.
+ - * / %

+.. var z = x + y;

-... var z = x - y;

*... var z = x * y;

/... var z = x / y;

%... var z = x % y;



// Comparison operators
Comparison operators compare data and return booleans
> < >= <= === !==

==... equal to - x == y

===... equal value and equal type - x === y

!=... not equal - x != y

!==... not equal value or not equal type - x !== y

>... greater than - x > y

<... less than - x < y

>=... greater than or equal to - x >= y

<=... less than or equal to - x <= y


// Logical operators
OPERATOR            EXPRESSION          RESULT
! (NOT).            !(1===1)            False
&& (AND)        (1 === 1 && 2 === 2)    True
|| (OR)         (1 === 1||1 === 2)      True

&&... and - (x < 10 && y > 1) is true

||... or - (x == 5 || y == 5) is false

!... not - !(x == y) is true


// Unary operators (!, typeOf, -)

A unary operation is an operation with only one operand. This operand comes either before or after the operator.
Unary operators are more efficient than standard JavaScript function calls. 
Additionally, unary operators can not be overridden, therefore their functionality is guaranteed.
typeof -	Returns a string which is the type of the operand.
Logical NOT (!)	Converts to boolean value then negates it
Unary negation (-)	Tries to convert the operand into a number and negates after


// Ternary operator (a ? b : c)

The conditional (ternary) operator is the only JavaScript operator that takes three operands:
a condition followed by a question mark (?), then an expression to execute if the condition is 
truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.
This operator is frequently used as a shortcut for the if statement.
*/
var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"