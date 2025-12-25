// src/pages/projects/content/Project15Content.js
import React from 'react';
import '../../../styles/ProjectContent.css';

export default function Project15Content() {
    return (
        <div className="project-content-box">
            <h2>Sparse Autoencoder Feature Analysis</h2>

            <p>
                This project was inspired by Adly Templeton et al.’s <em>"Scaling Monosemanticity: Extracting Interpretable
                Features from Claude 3 Sonnet"</em>, which studies how sparse autoencoders can extract human-interpretable
                "features" from internal activations of a neural network. The idea is that if we take a low-dimensional dense
                hidden layer and force it through a much higher dimensional layer with a 
                high sparsity penalty, the network is encouraged to represent each
                input using only a small number of active features, making it easier to interpret what the model is doing.
            </p>

            <p>
                To apply this idea in a controlled setting, I trained a binary classifier using stacked mutli-layer 
                perceptron (MLP) layers on synthetically generated spiral data. 

                Here, the goal is to identify whether certain feature activations correlate to certain classes and 
                regions in in the spiral. After the classifier converged, I froze its weights and trained a sparse 
                autoencoder (SAE) on the classifier's last hidden layer. The SAE projects the
                hidden vector from <code>256 to 1024</code>, applies a <code>ReLU</code>, and then projects back 
                down <code>1024 to 256</code>. 
                
                The SAE objective is a combination of (1) reconstruction error (so the decoded hidden state stays close 
                to the original) and (2) an <code>L1</code> penalty on the sparse activations (to induce sparsity).
            </p>

            <div className="image-gallery">
                <div className="gallery-item-full-wide">
                    <img src="/projects/project15/sae_flowchart.png" alt="Sparse autoencoder attached to an MLP hidden layer" />
                    <div className="gallery-caption">
                        SAE training and analysis pipeline.
                    </div>
                </div>
            </div>

            <p>
                In a typical MLP, hidden units are dense and "distributed," meaning that many neurons (features) contribute a 
                little to many concepts or ideas.

                Sparse autoencoders aim to instead learn a "dictionary of features" where each input activates only a few
                features. When this works well, individual features often align with recognizable patterns in the input space
                (or recognizable "concepts" in a language model setting). In this project, sparsity is enforced by applying
                a <code>ReLU</code> activation function and an <code>L1</code> penalty that encourages most activations
                to be near zero.
            </p>

            <p>
                Although the paper focuses on language model activations, the same structure can be applied to any learned
                representation. Here, the "representation" is the MLP's last hidden layer in classifying data points spatially
                within a spiral. The SAE's job is then to reconstruct that hidden vector while using as few active features as possible. 

                A key design choice is the size of the sparse layer (the "dictionary size"). Making the SAE layer
                overcomplete (higher dimensionality than the MLP hidden dimension) gives the model room to separate factors
                of variation into different directions. However, interpretability only becomes meaningful if the dataset provides
                enough coverage to "identify" these features. In practice:
            </p>
            <ul style={{textAlign:'left'}}>
                <li>
                    If the sparse layer's dimensionality is too small, features are forced to be reused (high polysemanticity),
                    and the SAE behaves more like a compression bottleneck than a feature dictionary.
                </li>
                <li>
                    If the sparse layer's dimensionality is too large relative to the dataset, many features become
                    dead (never activate) or activate too rarely to be reliably interpreted.
                </li>
                <li>
                    For monosemanticity to hold, you generally want a system where the dataset has enough diverse examples that
                    each useful feature activates across many inputs (or at least across enough inputs to distinguish it from noise),
                    while sparsity keeps features separated rather than entangled.
                </li>
            </ul>

            {/* maybe put diagram showing this here? */}

            <p>
                With a high sparsity weight (<code>L1 lambda = 50</code>) and a <code>1024</code> dimensional sparse layer, the SAE learned
                a representation where only a small fraction of features meaningfully activate. In my SAE, only about
                ~49 features were active while the rest were effectively dead or negligible. This is a sign that the
                sparsity penalty successfully pushed the model into a "few-features-on" mode, at the cost of some reconstruction
                accuracy. Qualitatively, the classifier’s decision boundary computed through the SAE remained close to the original
                MLP boundary, with slight deviations near the ends of the spirals.
            </p>

            <div className="image-gallery">
                <div className="gallery-item-wide">
                    <img src="/projects/project15/sae_decision_boundary_compare.png" alt="Original vs SAE decision boundary comparison" />
                    <div className="gallery-caption">
                        Original MLP decision boundary vs. the decision boundary when routing through the SAE. Green line is the SAE boundary.
                    </div>
                </div>
            </div>

            <p>
                To inspect interpretability, I visualized individual SAE features by evaluating their activation over a 2D grid
                and plotting a heatmap. These plots show where in input space a given feature activates strongly. Several features
                displayed clear geometric structure (localized "regions" of activation) rather than random noise. In particular,
                a small set of features dominated classification behavior, especially features such as 360,
                366, and 481, which appeared to align with meaningful portions of the spiral structure. Shown below is a grid of 
                the top SAE feature activations, sorted by max activation.
            </p>

            <div className="image-gallery">
                <div className="gallery-item-wide">
                    <img src="/projects/project15/sae_top_features_max.png" alt="Grid of top SAE feature activation heatmaps" />
                    <div className="gallery-caption">
                        A grid of the most active SAE features (heatmaps). Brighter regions indicate stronger activation. Points are overlaid for reference.
                    </div>
                </div>
            </div>

            <p>
                Following the intervention style used in the Anthropic paper, I tested whether an individual feature causally
                influences the classifier. For my analysis, I selected feature 366 and performed two interventions:
                (1) boosting the feature activation (multiplying its activation value by 10) and (2) degrading the feature
                (setting it to zero). As shown below on the left, boosting feature 366 significantly expanded the region classified as "the black spiral",
                indicating that this feature strongly contributes to the decision boundary. Degrading it (shown below on the right) altered the boundary
                more subtly, suggesting that other moderately important features can partially compensate when one feature
                is removed. In the plots below, the blue line is the altered SAE decision boundary after boosting or degrading feature 366. 
                The dashed green line is the original SAE boundary without boosting or degrading.
            </p>

            <div className="image-gallery">
                <div className="gallery-item-wide">
                    <img src="/projects/project15/sae_feat366_boost.png" alt="Decision boundary after boosting SAE feature 366" />
                    <div className="gallery-caption">
                        <strong>Boosting</strong> feature 366 causes a noticeable shift in the decision boundary (blue line), suggesting a strong causal role.
                    </div>
                </div>
                <div className="gallery-item-wide">
                    <img src="/projects/project15/sae_feat366_degrade.png" alt="Decision boundary after degrading SAE feature 366" />
                    <div className="gallery-caption">
                        <strong>Degrading</strong> (zeroing) feature 366 changes the boundary less dramatically, implying other features can compensate.
                    </div>
                </div>
            </div>

            <p>
                This experiment demonstrates the core SAE workflow from the paper in a small, interpretable setting.
                Training an overcomplete sparse layer on hidden activations produces a set of features where only a small subset
                are active, and some of those features exhibit clear structure and causal influence on model behavior. The results
                also highlight a practical constraint: to get meaningful monosemantic features, the sparse dimension and sparsity
                strength must be balanced against dataset size and diversity. Too much capacity yields dead features, while too little
                capacity forces feature entanglement. You can view the code for the project here:&nbsp;
                <a href="https://github.com/Aidan4478D/ECE472/tree/main/hw07">Github repository</a>.
            </p>
        </div>
    );
}

