const html = document.documentElement
undefined
html

<html lang=​"en">​<head>​…​</head>​<body cz-shortcut-listen=​"true">​…​</body>​</html>​
html.children
HTMLCollection(2) [head, body]
const body= html.children[1]
undefined
body
<body cz-shortcut-listen=​"true">​…​</body>​
body.children
HTMLCollection(3) [ul, script, script]
const ul=body.children[0]
undefined
ul
<ul>​…​</ul>​
ul.children
HTMLCollection(3) [li, li, li]
li = ul.children[1]
<li>​…​</li>​
li.previousElementSibling
<li>​::marker​"1"</li>​
li.nextElementSibling
<li>​…​</li>​
