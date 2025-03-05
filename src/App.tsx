import { useEffect, useRef } from 'react'
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'
import { GroupActionVisualization } from './components/GroupActionVisualization'
import { SymmetryVisualization } from './components/SymmetryVisualization'
import { MonsterGroupVisualization } from './components/MonsterGroupVisualization'
import './App.css'

function App() {
  const deckRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (deckRef.current) {
      const deck = new Reveal({
        hash: true,
        slideNumber: true,
        controls: true,
        progress: true,
        center: true,
        transition: 'slide',
        width: '100%',
        height: '100%',
        margin: 0,
        minScale: 0.2,
        maxScale: 2.0,
        plugins: []
      })
      deck.initialize()
    }
  }, [])

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">
        <section>
          <h1>Group Theory, Abstraction, and the Monster</h1>
          <p>Exploring the 196,883-dimensional Monster Group</p>
        </section>

        <section>
          <h2>What is a Group?</h2>
          <p>A group <InlineMath math="(G, \cdot)"/> is a set <InlineMath math="G"/> with a binary operation <InlineMath math="\cdot"/> that satisfies:</p>
          <ul>
            <li className="highlight">Closure: <InlineMath math="\forall a,b \in G, a\cdot b \in G"/></li>
            <li className="highlight">Associativity: <InlineMath math="\forall a,b,c \in G, (a\cdot b)\cdot c = a\cdot (b\cdot c)"/></li>
            <li className="highlight">Identity: <InlineMath math="\exists e \in G, \forall a \in G, e\cdot a = a\cdot e = a"/></li>
            <li className="highlight">Inverses: <InlineMath math="\forall a \in G, \exists a^{-1} \in G, a\cdot a^{-1} = a^{-1}\cdot a = e"/></li>
          </ul>
        </section>

        <section>
          <h2>Examples of Groups</h2>
          <div className="two-column">
            <div>
              <ul>
                <li><InlineMath math="\mathbb{Z}"/> (integers under addition)</li>
                <li><InlineMath math="\mathbb{R}^*"/> (non-zero reals under multiplication)</li>
                <li><InlineMath math="S_n"/> (symmetric group of <InlineMath math="n"/> elements)</li>
                <li><InlineMath math="D_n"/> (dihedral group of order <InlineMath math="2n"/>)</li>
              </ul>
            </div>
            <div>
              <SymmetryVisualization size={300} />
            </div>
          </div>
        </section>

        <section>
          <h2>Group Properties</h2>
          <ul>
            <li>Order: <InlineMath math="|G|"/> = number of elements</li>
            <li>Subgroup: <InlineMath math="H \subseteq G"/> is a subgroup if <InlineMath math="(H, \cdot)"/> is a group</li>
            <li>Coset: <InlineMath math="gH = \{gh \mid h \in H\}"/></li>
            <li>Normal subgroup: <InlineMath math="\forall g \in G, gH = Hg"/></li>
          </ul>
        </section>

        <section>
          <h2>Group Actions</h2>
          <div className="two-column">
            <div>
              <p>A group <InlineMath math="G"/> acts on a set <InlineMath math="X"/> if:</p>
              <ul>
                <li><InlineMath math="\forall x \in X, e \cdot x = x"/></li>
                <li><InlineMath math="\forall g_1, g_2 \in G, x \in X, (g_1 \cdot g_2) \cdot x = g_1 \cdot (g_2 \cdot x)"/></li>
                <li>Orbit: <InlineMath math="G \cdot x = \{g \cdot x \mid g \in G\}"/></li>
                <li>Stabilizer: <InlineMath math="G_x = \{g \in G \mid g \cdot x = x\}"/></li>
              </ul>
            </div>
            <div>
              <GroupActionVisualization size={300} />
            </div>
          </div>
        </section>

        <section>
          <h2>The Monster Group M</h2>
          <div className="two-column">
            <div>
              <ul>
                <li>Order: <InlineMath math="|M| = 2^{46} \cdot 3^{20} \cdot 5^9 \cdot 7^6 \cdot 11^2 \cdot 13^3 \cdot 17 \cdot 19 \cdot 23 \cdot 29 \cdot 31 \cdot 41 \cdot 47 \cdot 59 \cdot 71"/></li>
                <li>Smallest faithful representation: 196,883 dimensions</li>
                <li>Character table: 194 × 194 matrix</li>
                <li>One of 26 sporadic simple groups</li>
              </ul>
            </div>
            <div>
              <MonsterGroupVisualization size={300} />
            </div>
          </div>
        </section>

        <section>
          <h2>Monstrous Moonshine</h2>
          <p>Connection between the Monster and modular functions:</p>
          <ul>
            <li className="highlight"><InlineMath math="j(\tau) = q^{-1} + 744 + 196,884q + \cdots"/></li>
            <li className="highlight"><InlineMath math="196,884 = 196,883 + 1"/></li>
            <li>Related to string theory compactification</li>
            <li>Borcherds' proof won Fields Medal (1998)</li>
          </ul>
        </section>

        <section>
          <h2>Group Classification</h2>
          <p>Finite simple groups fall into:</p>
          <ul>
            <li>Cyclic groups of prime order</li>
            <li>Alternating groups <InlineMath math="A_n"/> (<InlineMath math="n \geq 5"/>)</li>
            <li>Groups of Lie type</li>
            <li>26 sporadic groups</li>
          </ul>
          <p>Classification Theorem (2004): Complete list of finite simple groups</p>
        </section>

        <section>
          <h2>Applications in Physics</h2>
          <ul>
            <li>Particle symmetries: <InlineMath math="SU(3) \times SU(2) \times U(1)"/></li>
            <li>String theory: <InlineMath math="E_8 \times E_8"/> heterotic string</li>
            <li>Quantum mechanics: Symmetry operators</li>
            <li>Gauge theories: Local symmetries</li>
          </ul>
        </section>

        <section>
          <h2>Modern Applications</h2>
          <ul>
            <li>Cryptography: Discrete logarithm problem</li>
            <li>Error-correcting codes: Group codes</li>
            <li>Molecular symmetry: Point groups</li>
            <li>Computer graphics: Rotation groups</li>
          </ul>
        </section>

        <section>
          <h2>Conclusion</h2>
          <p>The Monster Group represents the pinnacle of mathematical abstraction, connecting number theory, algebra, and physics through the beauty of symmetry.</p>
          <p>Its discovery and study demonstrate the power of mathematical abstraction in understanding the fundamental structure of our universe.</p>
        </section>
      </div>
    </div>
  )
}

export default App
