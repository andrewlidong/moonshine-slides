import { useEffect, useRef } from 'react'
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'
import { GroupActionVisualization } from './components/GroupActionVisualization'
import { SymmetryVisualization } from './components/SymmetryVisualization'
import { MonsterGroupVisualization } from './components/MonsterGroupVisualization'
import { RubiksCubeVisualization } from './components/RubiksCubeVisualization'
import { InteractiveGroupOperation } from './components/InteractiveGroupOperation'
import './App.css'

// Updated for deployment testing
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
          <p>An intuitive journey through symmetry, patterns, and mathematical beauty</p>
        </section>

        <section>
          <h2>What is a Group?</h2>
          <div className="two-column">
            <div>
              <p>Think of a group as a collection of actions that:</p>
              <ul>
                <li>Can be combined (like doing one action after another)</li>
                <li>Can be undone (every action has a reverse)</li>
                <li>Have a "do nothing" option</li>
                <li>Always give the same result regardless of order</li>
              </ul>
            </div>
            <div>
              <p className="highlight">Real-world examples:</p>
              <ul>
                <li>Rotating a square (90° turns)</li>
                <li>Shuffling a deck of cards</li>
                <li>Moving pieces on a Rubik's cube</li>
                <li>Symmetries of a snowflake</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>The Language of Groups</h2>
          <div className="two-column">
            <div>
              <p>Mathematically, a group <InlineMath math="(G, \cdot)"/> is a set with:</p>
              <ul>
                <li>Closure: <InlineMath math="\forall a,b \in G, a\cdot b \in G"/></li>
                <li>Associativity: <InlineMath math="(a\cdot b)\cdot c = a\cdot (b\cdot c)"/></li>
                <li>Identity: <InlineMath math="\exists e \in G, e\cdot a = a\cdot e = a"/></li>
                <li>Inverses: <InlineMath math="\forall a \in G, \exists a^{-1} \in G"/></li>
              </ul>
            </div>
            <div>
              <p className="highlight">In plain English:</p>
              <ul>
                <li>Any two actions combined make another valid action</li>
                <li>Order of combining three actions doesn't matter</li>
                <li>There's always a "do nothing" action</li>
                <li>Every action can be undone</li>
              </ul>
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
              <MonsterGroupVisualization size={300} color="#2c3e50" />
            </div>
          </div>
        </section>

        <section>
          <h2>Visualizing the Monster</h2>
          <div className="monster-visualization">
            <MonsterGroupVisualization size={500} color="#2c3e50" />
          </div>
          <div className="two-column">
            <div>
              <h3>Key Features</h3>
              <ul>
                <li>196,883-dimensional space</li>
                <li>Complex internal structure</li>
                <li>Multiple symmetry axes</li>
                <li>Nested subgroup patterns</li>
              </ul>
            </div>
            <div>
              <h3>Mathematical Properties</h3>
              <ul>
                <li>Symmetry and automorphisms</li>
                <li>Maximal subgroups</li>
                <li>Character table structure</li>
                <li>Representation theory</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>The Discovery Story</h2>
          <div className="two-column">
            <div>
              <p className="highlight">The Mathematical Detective Story:</p>
              <ul>
                <li>1973: Fischer and Griess find hints of a massive group</li>
                <li>1979: Conway and Norton name it "The Monster"</li>
                <li>1980: Griess constructs it in 196,883 dimensions</li>
                <li>1998: Borcherds proves its connection to string theory</li>
              </ul>
            </div>
            <div>
              <p className="highlight">Why It's Special:</p>
              <ul>
                <li>Largest sporadic simple group</li>
                <li>More symmetries than atoms in the universe</li>
                <li>Connects number theory and physics</li>
                <li>Appears in string theory and quantum mechanics</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Understanding the Monster</h2>
          <div className="two-column">
            <div>
              <p className="highlight">Think of it like this:</p>
              <ul>
                <li>A Rubik's cube has 43,252,003,274,489,856,000 positions</li>
                <li>The Monster has ~8×10⁵³ elements</li>
                <li>That's more than the number of atoms in the universe!</li>
                <li>Yet it's still a simple group</li>
              </ul>
            </div>
            <div>
              <RubiksCubeVisualization size={300} color="#2c3e50" />
            </div>
          </div>
        </section>

        <section>
          <h2>Monstrous Moonshine</h2>
          <div className="two-column">
            <div>
              <p className="highlight">The Unexpected Connection:</p>
              <ul>
                <li>196,884 = 196,883 + 1</li>
                <li>Links modular functions to group theory</li>
                <li>Connects number theory to physics</li>
                <li>Led to new understanding of string theory</li>
              </ul>
            </div>
            <div>
              <p className="highlight">Why It Matters:</p>
              <ul>
                <li>Shows deep connections in mathematics</li>
                <li>Helps understand quantum gravity</li>
                <li>Inspires new mathematical concepts</li>
                <li>Unifies different areas of physics</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Real-World Applications</h2>
          <div className="two-column">
            <div>
              <p className="highlight">Physics:</p>
              <ul>
                <li>Particle symmetries</li>
                <li>String theory compactification</li>
                <li>Quantum mechanics</li>
                <li>Gauge theories</li>
              </ul>
            </div>
            <div>
              <p className="highlight">Technology:</p>
              <ul>
                <li>Error-correcting codes</li>
                <li>Cryptography</li>
                <li>Computer graphics</li>
                <li>Molecular modeling</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>The Beauty of Mathematics</h2>
          <p>The Monster Group teaches us that:</p>
          <ul>
            <li>Simple rules can create complex patterns</li>
            <li>Mathematics reveals hidden connections</li>
            <li>Beauty lies in unexpected relationships</li>
            <li>Understanding comes through multiple perspectives</li>
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
          <h2>Historical Development</h2>
          <div className="two-column">
            <div>
              <p className="highlight">Key Milestones:</p>
              <ul>
                <li>1832: Galois introduces group theory</li>
                <li>1872: Klein's Erlangen Program</li>
                <li>1895: Lie's continuous groups</li>
                <li>1963: Feit-Thompson Theorem</li>
                <li>2004: Classification of finite simple groups</li>
              </ul>
            </div>
            <div>
              <InteractiveGroupOperation size={300} color="#2c3e50" />
            </div>
          </div>
        </section>

        <section>
          <h2>Interactive Group Operations</h2>
          <div className="two-column">
            <div>
              <p className="highlight">Try it yourself:</p>
              <ul>
                <li>Click elements to select them</li>
                <li>Choose between multiply and inverse operations</li>
                <li>Observe how group operations work</li>
                <li>Notice the closure property in action</li>
              </ul>
            </div>
            <div>
              <InteractiveGroupOperation size={300} color="#2c3e50" />
            </div>
          </div>
        </section>

        <section>
          <h2>Conclusion</h2>
          <p>The Monster Group shows us that:</p>
          <ul>
            <li>Mathematics is full of surprises</li>
            <li>Deep connections exist between different fields</li>
            <li>Beauty and complexity can coexist</li>
            <li>Understanding comes through multiple perspectives</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default App
