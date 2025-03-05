#set page(
  paper: "presentation-16-9",
  margin: 0pt,
)

#set text(
  size: 24pt,
  fill: rgb(255, 255, 255),
)

#set heading(
  size: 36pt,
  weight: "bold",
  fill: rgb(255, 255, 255),
)

#rect(
  fill: rgb(0, 0, 0),
  width: 100%,
  height: 100%,
)

#show: project => {
  set text(family: "serif")
  project
}

#align(center)[
  #text(size: 48pt)[Group Theory, Abstraction, and the Monster]
  #v(1em)
  #text(size: 32pt)[Exploring the 196,883-dimensional Monster Group]
]

#slide[
  #heading[What is a Group?]
  
  A group $(G, ·)$ is a set $G$ with a binary operation $·$ that satisfies:
  
  #v(1em)
  #block(
    fill: rgb(30, 30, 30),
    inset: 1em,
    radius: 0.5em,
  )[
    • Closure: $∀a,b ∈ G, a·b ∈ G$
    • Associativity: $∀a,b,c ∈ G, (a·b)·c = a·(b·c)$
    • Identity: $∃e ∈ G, ∀a ∈ G, e·a = a·e = a$
    • Inverses: $∀a ∈ G, ∃a^(-1) ∈ G, a·a^(-1) = a^(-1)·a = e$
  ]
]

#slide[
  #heading[Examples of Groups]
  
  #v(1em)
  #block(
    fill: rgb(30, 30, 30),
    inset: 1em,
    radius: 0.5em,
  )[
    • $ℤ$ (integers under addition)
    • $ℝ^×$ (non-zero reals under multiplication)
    • $S_n$ (symmetric group of $n$ elements)
    • $D_n$ (dihedral group of order $2n$)
  ]
]

#slide[
  #heading[Group Properties]
  
  #v(1em)
  #block(
    fill: rgb(30, 30, 30),
    inset: 1em,
    radius: 0.5em,
  )[
    • Order: $|G|$ = number of elements
    • Subgroup: $H ⊆ G$ is a subgroup if $(H, ·)$ is a group
    • Coset: $gH = {gh | h ∈ H}$
    • Normal subgroup: $∀g ∈ G, gH = Hg$
  ]
]

#slide[
  #heading[The Monster Group M]
  
  #v(1em)
  #block(
    fill: rgb(30, 30, 30),
    inset: 1em,
    radius: 0.5em,
  )[
    • Order: $|M| = 2^46 · 3^20 · 5^9 · 7^6 · 11^2 · 13^3 · 17 · 19 · 23 · 29 · 31 · 41 · 47 · 59 · 71$
    • Smallest faithful representation: 196,883 dimensions
    • Character table: 194 × 194 matrix
  ]
]

#slide[
  #heading[Monstrous Moonshine]
  
  Connection between the Monster and modular functions:
  
  #v(1em)
  #block(
    fill: rgb(30, 30, 30),
    inset: 1em,
    radius: 0.5em,
  )[
    • $j(τ) = q^(-1) + 744 + 196,884q + ...$
    • $196,884 = 196,883 + 1$
    • Related to string theory compactification
  ]
]

#slide[
  #heading[Group Classification]
  
  Finite simple groups fall into:
  
  #v(1em)
  #block(
    fill: rgb(30, 30, 30),
    inset: 1em,
    radius: 0.5em,
  )[
    • Cyclic groups of prime order
    • Alternating groups $A_n$ ($n ≥ 5$)
    • Groups of Lie type
    • 26 sporadic groups
  ]
]

#slide[
  #heading[Applications in Physics]
  
  #v(1em)
  #block(
    fill: rgb(30, 30, 30),
    inset: 1em,
    radius: 0.5em,
  )[
    • Particle symmetries: $SU(3) × SU(2) × U(1)$
    • String theory: $E_8 × E_8$ heterotic string
    • Quantum mechanics: Symmetry operators
  ]
]

#slide[
  #heading[Conclusion]
  
  #v(1em)
  #block(
    fill: rgb(30, 30, 30),
    inset: 1em,
    radius: 0.5em,
  )[
    The Monster Group represents the pinnacle of mathematical abstraction, connecting number theory, algebra, and physics through the beauty of symmetry.
  ]
] 