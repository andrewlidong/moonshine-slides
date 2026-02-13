import { useEffect } from 'react'
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import './App.css'

function App() {
  useEffect(() => {
    const deck = new Reveal({
      controls: true,
      progress: true,
      center: true,
      hash: true,
    })
    deck.initialize()
  }, [])

  return (
    <div className="reveal">
      <div className="slides">
        <section>
          <h1>Monstrous Moonshine</h1>
          <aside className="notes">
          </aside>
        </section>

        <section>
          <h2>What is it?</h2>
          <div className="text-container">
            <p>
              Monstrous Moonshine is an unexpected link between two distant areas of math: 
              the Monster group (a huge symmetry group) and a special modular function called 
              the j-invariant.
            </p>
            <p>
              These two objects come from completely different "worlds" 
              of mathematics – yet they mysteriously correspond to each other.
            </p>

          </div>
          <aside className="notes">
          Monstrous Moonshine refers to a surprising mathematical mystery: somehow, a gigantic symmetry object (the Monster group) is intimately connected to a certain number-theoretic function (the j-invariant). Imagine discovering that a pattern in one field of math (group theory) perfectly predicts numbers in a different field (complex functions)!           
          </aside>
        </section>

        <section>
          <h2>Why "Moonshine"?</h2>
          <div className="text-container">
            <p>
              The name "Monstrous Moonshine" combines the Monster (for the group) with "moonshine," because John Conway thought it was crazy that these two objects could be related.  
            </p>
            <p>
              Yes, this is Conway's Game of Life John Conway.  
            </p>
          </div>
          <aside className="notes">
          This idea sounded so far-fetched that John Conway joked it was mere "moonshine," i.e. pure craziness​. But it turned out to be real – a true mathematical "aha!" moment linking two puzzles from different realms into one. In this talk, we'll explore what the Monster group is, what the j-invariant is, how this wild connection was discovered, and why it matters.          
          </aside>
        </section>

        <section>
          <h2> Groups</h2>
          <div className="text-container">
            <p>
              A symmetry group is the set of all transformations that leave an object looking the same.
              Think of rotating a snowflake 60° – it looks identical after the rotation.
            </p>
            <div className="snowflake-container">
              <img src="/moonshine-slides/snowflake.svg" alt="Rotating snowflake showing 6-fold symmetry" className="snowflake-demo" />
              <p className="caption">A snowflake has 6-fold rotational symmetry, and is part of the symmetry group D6</p>
            </div>
          </div>
          <aside className="notes">
          Every symmetrical object has an associated group of symmetries – the set of all ways you can move it or flip it such that it still looks the same. For example, a six-pointed snowflake has a symmetry group including rotations and reflections (turn it 60° or mirror it, and it remains unchanged). 

          A snowflake has 6-fold symmetry; you can rotate it or reflect it and it stays the same. The dashed lines in this image show axes of symmetry. All such symmetry operations, combined, form the snowflake's symmetry group. In mathematics, we extend this idea to very abstract objects.           
        </aside>
        </section>

        <section>
          <h2>More Groups</h2>
          <div className="text-container">
            <p>
              A group is the same if there is an isomorphism between them.  (Think cube rotations vs permutation group of 4 elements)
            </p>
            <p>
              Finite groups break down into simple groups (Jordan-Holder Theorem)
            </p>
            <p>
              In 2004, Aschbacher and Smith proved the Classification of Quasithin Groups, proving that all the simple groups are known.
            </p>
            <p>
              In particular, there are 18 infinite families of simple groups (C groups, A Groups, Lie), but then 26 other sporadic groups
            </p>
            <div className="concept-image">
              <img src="/moonshine-slides/group-isomorphism.svg" alt="Visualization of group isomorphism between cube rotations and permutations" />
            </div>

          </div>
          <aside className="notes">
          </aside>
        </section>

        <section>
          <h2>The Monster Group</h2>
          <div className="text-container">
            <p>
              The Monster is the largest sporadic simple symmetry group known – with about 8×10⁵³ elements.
              That's a lot.  
            </p>
            <p>
              The second largest sporadic simple group is the baby monster, and there are 18 other sporadic groups that are "children" of the monster, called the happy family.  There's also 6 pariah groups.  
            </p>
            <div className="monster-family-container">
              <img src="/moonshine-slides/monster-family.svg" alt="Monster group family tree showing the Monster, Baby Monster, Happy Family, and Pariah groups" className="monster-family" />
            </div>

          </div>
          <aside className="notes">
          The Monster group is a kind of "holy grail" of symmetry groups – the largest exceptional symmetric structure. It was discovered as part of the classification of finite simple groups (often described as a catalog of the "building blocks" of symmetry). The Monster has a whopping ~8×10^53 elements​ – that number is astronomically large (bigger than the number of atoms in a thousand planets!). If a Rubik's cube's moves form a group, imagine a Rubik's cube on steroids in 196,883 dimensions – that gives an intuition of the Monster. In fact, the Monster can be thought of as the symmetry group of a highly complex geometric object that effectively lives in 196,883-dimensional space​ . No physical object exists there, of course, but mathematically it's a perfectly consistent (if extremely complicated) symmetry. The Monster group is so exceptional that mathematicians were in awe of its existence – it's like encountering a giant mythical creature in the landscape of mathematics.
          </aside>
        </section>


        <section>
          <h2>196,883 dimensions</h2>
          <div className="text-container">
            <p>
              This group is so complex that it cannot be visualized in ordinary space.
              The Monster's symmetries effectively act in 196,883 dimensions
            </p>
            
            <p>
              Think of it as a kaleidoscope pattern – but in almost two hundred thousand dimensions.
            </p>
            <div className="dimensions-container">
              <img src="/moonshine-slides/dimensions.svg" alt="Visualization showing progression from 1D to 196,883 dimensions" className="dimensions-viz" />
            </div>
          </div>
          <aside className="notes">
            We can visualize a cube's symmetries in 3D space, but the Monster requires
            196,883 dimensions to be properly represented. This is not just big - it's
            in a realm beyond human visualization. The kaleidoscope analogy helps us
            grasp the concept, even though the reality is far more complex.
          </aside>
        </section>

        <section>
          <h2>Modular Functions and the j-Invariant</h2>
          <div className="text-container">
            <p>
              Modular functions are special functions in number theory that have repeating symmetry patterns 
              on the complex plane (imagine a pattern like an M.C. Escher tessellation that repeats in a structured way).
            </p>
            <p>
              Different torus shapes correspond to different values of the j-function. For example, 
              a square torus has j = 1728, while a hexagonal torus has j = 0.
            </p>

            <div className="modular-container">
              <img src="/moonshine-slides/taoros.png" alt="Visualization of torus shapes" className="modular-viz taoros-image" />
            </div>
            {/* <div className="modular-container">
              <img src="/modular-pattern.svg" alt="Visualization of modular patterns" className="modular-viz" />
            </div> */}
          </div>
          <aside className="notes">
            Modular functions are like mathematical kaleidoscopes - they create beautiful, repeating patterns
            in the complex plane. These patterns aren't just pretty - they encode deep mathematical properties
            and have profound connections to other areas of mathematics.
          </aside>
        </section>

        <section>
          <h2>"Fingerprints" of Shapes</h2>
          <div className="text-container">
            <p>
              The j-invariant (or j-function) is a famous example of a modular function. It essentially assigns 
              a unique number to every distinct torus shape (an elliptic curve, which topologically is like a donut).
            </p>
            <p>
              In other words, it's like a "fingerprint" for the shape of a torus – if two tori have different 
              geometry, the j-invariant will distinguish them.
            </p>
            <p>
              A key property of the j-invariant is its Fourier series expansion:
            </p>
            <div className="math-container">
              j(q) = 1/q + 744 + 196884q + 21,493,760q² + 864,299,970q³ + ...
            </div>
            <p className="caption">
              (Here q=e^(2πiτ); the series produces a sequence of big coefficients: 744, 196,884, 21,493,760, ...)
            </p>
          </div>
          <aside className="notes">
            Think of each possible donut (torus) shape getting its own ID number. The j-function is like an ID 
            machine – its output acts as a unique tag or fingerprint for each shape of a donut in the mathematical 
            universe. The coefficients in its expansion will turn out to have a deep connection to the Monster group.  
          </aside>
        </section>

        <section>
          <h2>The Donut ID Machine</h2>
          <div className="text-container">
            <p>
              Imagine you have a magical machine that can identify any donut shape in the universe by giving it a unique ID number.
              That's what the j-function does for mathematical donuts.
            </p>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/YkXr1ET8jWo"
                title="Understanding Torus Shapes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </section>

        <section>
          <h2>Special Donut Shapes</h2>
          <div className="text-container">
            <p>
              Each donut shape gets its own unique j-value, but some special shapes have particularly nice numbers:
            </p>
            <div className="donut-grid">
              <div className="donut-item">
                <img src="/moonshine-slides/square-donut.jpg" alt="Square donut shape" className="donut-viz" />
                <p className="caption">Square donut → j = 1728</p>
              </div>
              <div className="donut-item">
                <img src="/moonshine-slides/hexagonal-donut.jpg" alt="Hexagonal donut shape" className="donut-viz" />
                <p className="caption">Hexagonal donut → j = 0</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>The Initial Discovery</h2>
          <div className="text-container">
            <p>
              In 1978, mathematician John McKay noticed something astonishing in the j-function's expansion:
            </p>
            <div className="math-container highlight">
              196,884 = 196,883 + 1
            </div>
            <p>
              This coincidence linked a number from the j-function to a fundamental property 
              of the Monster group – two objects from completely different mathematical worlds
            </p>

            <div className="coincidence-container">
              <div className="coincidence-item">
                <p className="highlight">196,884</p>
                <p className="caption">First big coefficient in j-function</p>
              </div>
              <div className="coincidence-item">
                <p className="highlight">196,883</p>
                <p className="caption">Dimension of Monster's smallest representation</p>
              </div>
            </div>

            <div className="concept-image">
              <img src="/moonshine-slides/two-spiderman.jpg" alt="Two mathematical worlds pointing at each other" className="meme-image" />
            </div>
          </div>
        </section>

        <section>
          <h2>The Moonshine Conjecture</h2>
          <div className="text-container">
            <div className="timeline">
              <div className="timeline-item">
                <p className="date">1978</p>
                <p>McKay notices the 196,884 connection</p>
              </div>
              <div className="timeline-item">
                <p className="date">1979</p>
                <p>Conway and Norton publish "Monstrous Moonshine"</p>
              </div>
            </div>
            <p>
              Conway and Norton's 1979 paper "Monstrous Moonshine" boldly conjectured that this was no 
              coincidence – there must be a real mathematical connection. They listed many instances where 
              Monster group elements and the j-function's values line up in a genus-zero modular function 
              called "McKay–Thompson series."
            </p>
            <div className="concept-image">
              <img src="/moonshine-slides/multiple-spidermen.jpg" alt="Multiple mathematical concepts pointing at each other" className="meme-image" />
            </div>
          </div>
        </section>

        <section>
          <h2>Strings?</h2>
          <div className="text-container">
          <p>
              For over a decade, the Moonshine Conjecture remained one of mathematics' unsolved mysteries. 
            </p>

            <p>
              Proving Monstrous Moonshine was a colossal challenge that required inventing new mathematics.
              The key insight came from an unexpected direction: string theory.
            </p>
            <p>
              String theory suggests that fundamental particles are actually tiny vibrating strings.
              But how does this connect to the Monster group and the j-function?
            </p>
            <div className="concept-image">
              <img src="/moonshine-slides/string-theory.jpg" alt="String theory connection to Monster group" className="meme-image" />
            </div>
            <aside className="notes">
            Proving Monstrous Moonshine was a colossal challenge – it wasn't enough to notice the patterns; 
            one had to explain them with a rigorous theory. Borcherds achieved this by basically inventing 
            the necessary mathematics. He connected the problem to string theory, where the symmetries of a 
            particular model (involving the Leech lattice) form the Monster group, and the allowed energy 
            levels of string vibrations are encoded by modular functions like the j-invariant. This was the 
            missing "why" behind the scenes.
          </aside>

          </div>
        </section>

        <section>
          <h2>The Leech Lattice Connection</h2>
          <div className="text-container">
            <p>
              In 1992, Richard Borcherds discovered that a particular string theory model using the Leech lattice 
              (a special 24-dimensional pattern) held the key.  
            </p>
            <p>
              The Leech lattice is a remarkable 24-dimensional crystal-like pattern that:
            </p>
            <ul>
              <li>Has the densest known sphere packing in 24 dimensions</li>
              <li>Contains the symmetries needed to build the Monster group</li>
              <li>Provides the perfect space for the string vibrations that generate the j-function</li>
            </ul>
          </div>

            <div className="concept-image">
              <img src="/moonshine-slides/leech-lattice.png" alt="Visualization of the Leech lattice pattern" className="meme-image" />
            </div>
          <aside className="notes">
            Then in 1992, Richard Borcherds achieved a breakthrough by connecting the problem to string 
            theory – a theory where fundamental particles are tiny vibrating strings. The Leech lattice, 
            with its perfect symmetries in 24 dimensions, provided the exact structure needed to bridge 
            the Monster group and the j-function through string theory.
          </aside>
        </section>

        <section>
          <h2>The Moonshine Module</h2>
          <div className="text-container">
            <p>
              To make this rigorous, Borcherds constructed a Vertex Operator Algebra (VOA) 
              – nicknamed the "Moonshine Module" – that precisely describes how these strings vibrate.
            </p>
            <div className="math-container">
              In this VOA (Moonshine Module):
            </div>
            <ul>
              <li>The Monster group appears naturally as the symmetry group of the VOA</li>
              <li>j-function coefficients appear as the graded dimensions (essentially, counts of certain states), aligning with the different ways strings can vibrate</li>
              <li>The "no-ghost theorem" (which ensures the consistency of certain infinite-dimensional spaces) proves it's all mathematically sound</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>A Mathematical Triumph</h2>
          <div className="text-container">
            <p>
              Borcherds was "over the moon" when he solved it, and the mathematics community celebrated 
              this breakthrough that bridged pure mathematics and theoretical physics.
            </p>
            <div className="timeline">
              <div className="timeline-item">
                <p className="date">1992</p>
                <p>Proof published</p>
              </div>
              <div className="timeline-item">
                <p className="date">1998</p>
                <p>Fields Medal awarded</p>
              </div>
            </div>
            <p>
              The proof showed that what seemed like numerical coincidences were actually 
              glimpses of a deep connection between symmetry, string theory, and number theory.
            </p>
            <p>
            The tools developed by Borcherds (vertex operator algebras, etc.) are now used extensively in algebra and geometry
            </p>

          </div>
          <aside className="notes">
            Borcherds' proof was revolutionary because it not only solved the conjecture but also 
            revealed why the connection exists. The VOA framework showed that the Monster group and 
            j-function were naturally connected through string theory, transforming a mysterious 
            coincidence into a profound mathematical truth.
          </aside>
        </section>

        <section>
          <h2>Connections to Physics</h2>
          <div className="text-container">
            <p>
              The Monster's appearance in string theory hints at deeper physical meaning:
            </p>
            <ul>
              <li>The Moonshine Module is a model of 2D conformal field theory - a structure also used to describe strings</li>
              <li>Possible connections to black hole physics and quantum gravity.</li>
              <li>Later developments (umbral moonshine) suggest links to counting black hole states</li>
              <li>There are 194 natural conjugacy classes of the monster and 194 types of black holes in some theoretical models.  Is this a coincidence?</li>

            </ul>
          </div>
        </section>

        <section>
          <h2>More Moonshine</h2>
          <div className="text-container">
            <p>
              Monstrous Moonshine was just the beginning. New "moonshines" keep emerging:
            </p>
            <ul>
              <li>
                <span className="highlight">Mathieu Moonshine:</span> Connects group M₂₄ to K3 surfaces
              </li>
              <li>
                <span className="highlight">Umbral Moonshine:</span> A family of moonshines linking 
                sporadic groups to mock modular forms
              </li>
            </ul>
            <p>
            The term "moonshine" itself, once used jokingly, has become a proud badge for an entire research area. 
            </p>
          </div>
        </section>

        <section>
          <h2>Open Questions</h2>
          <div className="text-container">
            <ul>
              <li>Why does the Monster exist in such a perfectly packaged way?</li>
              <li>Is there a unified theory connecting all moonshines?</li>
              <li>Could the Monster's 194 conjugacy classes correspond to different types of black holes?</li>
            </ul>
          </div>
          <aside className="notes">
            Monstrous Moonshine has become a catalyst for cross-disciplinary research, 
            bridging pure mathematics and theoretical physics. It suggests that Nature might 
            employ the same mathematics we once thought was just abstract play. The story 
            continues to unfold, inviting new generations to explore these deep connections 
            and piece together the ultimate puzzle.
          </aside>
        </section>

      </div>
    </div>
  )
}

export default App
