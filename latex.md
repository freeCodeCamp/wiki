You can embed Latex in GitterIM
- `$$\huge\textstyle{some text}$$` -> $$\huge\textstyle{some text}$$
- `$$\color{#F90}{some text}$$` -> $$\color{#F90}{some text}$$

## details
[KaTeX Github Repo](https://github.com/Khan/KaTeX)
LaTeX is a high-quality typesetting system; it includes features designed for the production of technical and scientific documentation. LaTeX is the de facto standard for the communication and publication of scientific documents.
His advantages are noticable in long documents like books, papers or thesis.

Gitter uses Katex (an custom implementation of LaTeX) and it can be used introducing the following code:

`` $$ (latex language) $$ ``

```latex
$$\begin{array} {c c}
item11 & item12\
item21 & item 22\
\end{array}
$$
```