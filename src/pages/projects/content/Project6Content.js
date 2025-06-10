// src/pages/projects/content/Project1Content.js
import React from 'react';
import '../../../styles/ProjectContent.css';

// maybe in the future have an interactive way the people on the site
// can play with the 100% or 75% model

export default function Project6Content() {
    return (
        <div className = "project-content-box">
            <h2>Financial Sentence Sentiment Analyzer</h2>
            <p>
                After taking an independent study in Finance (EID378 with
                Professor Fred Fontaine), I became very interested as to how I 
                could potentially "predict the sentiment" surrounding a company's
                quarterly report. I believed that this information could help 
                guide my own investment decisions. Thus, for my final project in
                the graduate class ECE467 - Natural Language Processing, I created
                the <strong> Financial Sentence Sentiment Analyzer</strong>. This
                sentiment analysis model takes in any sentence relating to finance 
                and predicts whether it resonates to a more positive, negative, 
                or neutral feeling. 
            </p>
            <p>
                To train the model, I used the Financial Phrase Bank v.1.0 (2013)
                dataset as it consisted of 4,840 total sentences annotated by "16 
                people with adequate background knowledge on financial markets" 
                (3 researchers, 13 master's students from the Aalto University 
                School of Business). &nbsp;
                
                <a href="https://huggingface.co/datasets/takala/financial_phrasebank">
                    Click here to view the dataset on Hugging Face.
                </a> &nbsp;

                Each sentence example has 5 to 8 annotations (positive, negative neutral) 
                so naturally, there is going to be discrepancy over how each 
                sentence should be labeled. Thus the dataset is split into: 
                <ul>
                  <li>Sentences with 100% Agreement</li>
                  <li>Sentences with 75% Agreement</li>
                  <li>Sentences with 66% Agreement</li>
                  <li>Sentences with 50% Agreement</li>
                </ul>
            </p>
            <p>
                Sentences with 100% agreement indicate that all annotators unanimously
                agreed on the label. The same principle applies to the 75%, 66%, 
                and 50% agreement levels, where the percentage reflects the proportion 
                of annotators who agreed on the assigned label. It's also important 
                to note that each agreement-level dataset is cumulative. For example, 
                the 66% agreement dataset also contains all the sentences from the 
                75% and 100% agreement datasets.
            </p>
            <p>
                In total, I performed 11 different experiments, trying different 
                pre-trained BERT models, datasets (50%, 66%, 75%, 100% agree), 
                learning rates, optimizers, and loss functions. After my experimentation,
                I was left with two models that performed very well. Both of the 
                models use a distilbert model fine-tuned on binary classification 
                (SST-2) as a base (distilbert-base-uncased-finetuned-sst-2-english), 
                a learning rate of 2e-5, the AdamW optimizer, and the cross entropy 
                loss function. The only major difference is the dataset used to train 
                the model. The first model (Iteration 2 in the table below) uses 
                the 75% agreement dataset. The second model (Iteration 9 in the table 
                below) uses the 100% agreement dataset.
            </p>
            <div className="image-gallery">
                <div className="gallery-item">
                    <img src="/projects/project6/nlp-final-model-table.png" alt="Final Model Details" />
                    <div className="gallery-caption">Final Model Details</div>
                </div>

                <div className="gallery-item">
                    <img src="/projects/project6/nlp-final-model-75.png" alt="75% Model Confusion Matrix" />
                    <div className="gallery-caption">75% Model Confusion Matrix</div>
                </div>

                <div className="gallery-item">
                    <img src="/projects/project6/nlp-final-model-100.png" alt="100% Model Confusion Matrix" />
                    <div className="gallery-caption">100% Model Confusion Matrix</div>
                </div>
            </div>

            <p>
                If I had to pick one, I’d go with the 75% agreement model as it 
                encompasses a good balance between clarity and real-world nuance, 
                especially considering the dataset dates back to 2013 and financial 
                language has evolved since. That said, for more formal and 
                well-structured texts like company reports, the 100% agreement model 
                might be better suited, since it's built on data with less ambiguity. 
                In the end, it depends on the use case: for single-sentence sentiment, 
                75% would probably work the best; for broader analysis of clean, 
                professional language, 100% could perform very well. All of this 
                and applying it to making decisions in my portfolio is something I'm
                looking to explore more in the future. &nbsp;

                <strong>Contact me if you would like to view the code or full report 
                for this project! </strong>
            </p>
            
        </div>
    );
}

