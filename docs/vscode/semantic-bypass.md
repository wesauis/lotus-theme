# Semantic Bypass

semantic tokens have fallback textmate matchers, that, if the semantic token doen't have a color will be used as the semantic token color

this is really anoying when you need to match that scope but by doing so you end up by coloring losing options

to bypass this i found this trick: use `source <fallback_scope>`, this will add the color to that token widout activating the fallback quirck

a work around, but better than having to write your own tokenization