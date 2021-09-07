# SEMANTIC TOKENS

| Semantic Token | Description                                                                                    |
| -------------: | :--------------------------------------------------------------------------------------------- |
|      namespace | For identifiers that declare or reference a namespace, module, or package.                     |
|          class | For identifiers that declare or reference a class type.                                        |
|           enum | For identifiers that declare or reference an enumeration type.                                 |
|      interface | For identifiers that declare or reference an interface type.                                   |
|         struct | For identifiers that declare or reference a struct type.                                       |
|  typeParameter | For identifiers that declare or reference a type parameter.                                    |
|           type | For identifiers that declare or reference a type that is not covered above.                    |
|      parameter | For identifiers that declare or reference a function or method parameters.                     |
|       variable | For identifiers that declare or reference a local or global variable.                          |
|       property | For identifiers that declare or reference a member property, member field, or member variable. |
|     enumMember | For identifiers that declare an enumeration property, constant, or member.                     |
|          event | For identifiers that declare an event property.                                                |
|       function | For identifiers that declare a function.                                                       |
|         method | For identifiers that declare a member function or method.                                      |
|          macro | For identifiers that declare a macro.                                                          |
|          label | For identifiers that declare a label.                                                          |
|        comment | For tokens that represent a comment.                                                           |
|         string | For tokens that represent a string literal.                                                    |
|        keyword | For tokens that represent a language keyword.                                                  |
|         number | For tokens that represent a number literal.                                                    |
|         regexp | For tokens that represent a regular expression literal.                                        |
|       operator | For tokens that represent an operator.                                                         |

## MODIFIERS

Modifiers allows the selection of subcategories of semantic tokens.
They can be defined with the pattern `<semantic-token>.<modifier>`

| Semantic Modifier | Description                                                |
| ----------------: | :--------------------------------------------------------- |
|       declaration | For declarations of symbols.                               |
|        definition | For definitions of symbols, for example, in header files.  |
|          readonly | For readonly variables and member fields (constants).      |
|            static | For class members (static members).                        |
|        deprecated | For symbols that should no longer be used.                 |
|          abstract | For types and member functions that are abstract.          |
|             async | For functions that are marked async.                       |
|      modification | For variable references where the variable is assigned to. |
|     documentation | For occurrences of symbols in documentation.               |
|    defaultLibrary | For symbols that are part of the standard library.         |
