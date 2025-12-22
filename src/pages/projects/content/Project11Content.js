// src/pages/projects/content/Project1Content.js
import React from 'react';
import '../../../styles/ProjectContent.css';

export default function Project11Content() {
    return (
        <div className = "project-content-box">
            <h2>Multimodal Caption Verifier</h2>
            <p>
                There are many models online that generate a caption for a given
                image, but who's to say if that caption is an accurate description?
                That's why, for my final project in the graduate class ECE491 - 
                Experimentation with PyTorch, I decided to develop a caption 
                validator. This is a multimodal model, meaning that it integrates
                and processes multiple types of data. In this case, both image
                and textual data are used during training and inference.

            </p>
            <p>
                To build this model, I first needed a dataset with existing image-caption 
                pairs in it. I decided to work with the&nbsp;
                <a href="https://huggingface.co/datasets/nlphuji/flickr30k">Flickr30k</a>&nbsp;
                dataset, which contained ~31,000 images with 5 manually annotated 
                captions (obtained through crowdsourcing) associated with each image. 
                The images were of "everyday activities, events, and scenes" from 
                the website <a href="https://flickr.com">flickr.com</a>. In my model, I was planning to fine-tune 
                existing image processing and text models, so I just needed a subset 
                of this dataset. I experimented with a variety of sample sizes, but 
                I ended up choosing a size of 2000 randomly selected samples, as I felt like
                this was enough for the model to "learn" while keeping the
                training cost low in terms of time and Google Colab compute units.

                With these 2000 samples, in my dataset, I included two instances of each image. 
                One of these instances had a correct caption (from the original caption list)
                associated with the image, and one with an incorrect caption (from a random
                image caption list) associated with the image. An example of an image with
                a correct caption and one with an incorrect caption can be seen below. 
                Therefore, in total, there were 4,000 examples to train, validate, and 
                test on in my dataset (80/10/10 split).

                <div className="image-gallery">
                    <div className="gallery-item">
                        <img src="/projects/project11/pytorch-correct-caption.png" alt="Sample with Correct Caption" />
                        <div className="gallery-caption">Sample with Correct Caption</div>
                    </div>

                    <div className="gallery-item">
                        <img src="/projects/project11/pytorch-incorrect-caption.png" alt="Sample with Incorrect Caption" />
                        <div className="gallery-caption">Sample with Incorrect Caption</div>
                    </div>
                </div>
            </p>
            { /*
            <p>
                Before training the model, there was some image preprocessing necessary 
                to standardize the image for the image processing model. For this, 
                I used the transforms module within the Torch Vision library, which
                worked pretty well. Each image was resized to a set size, set to 
                the same color settings, and some examples had a random horizontal 
                flip to try to avoid overfitting to specific images.
            </p>
            */ }
            <p>
                As for the model itself, I generally came up with the model architecture
                myself, referring to past binary classifiers I made and google
                images for reference. I looked on online forums for ideas on how 
                to combine the embeddings, but mainly concatenated them, element-wise 
                multiplied them, or did some sort of fusion between the two (concat 
                the concatenated version with the multiplied version). Check
                out the model architecture in the image below!

                <div className="image-gallery">
                    <div className="gallery-item-full-wide">
                        <img src="/projects/project11/pytorch-model-architecture.png" alt="Model Architecture" />
                        <div className="gallery-caption">Multimodal Caption Verifier Model Architecture</div>
                    </div>
                </div>
            </p>
            <p>
                In total, I ran 29 trials with different hyperparameters and model 
                architectures. I tried different: totral training examples, batch 
                sizes, image embedding models (CNN vs. ViT), number of epochs, 
                dropout rates, regularization (L1 and L2), learning rates, learning 
                rate schedulers, model output tokens (pooler vs. last hidden state), 
                caption length, combination of embeddings, and number of "stages" 
                within the model.
                
                By "stages," I refer to a two-phase fine-tuning process. In the first 
                stage, I froze the weights of the pretrained image and text models 
                and trained only the classifier head. Since the classifier weights 
                were randomly initialized, this allowed the model to learn how to 
                map the fixed pretrained model embeddings to the correct labels 
                without disrupting the already strong pretrained representations. 
                In the second stage, I unfroze the image and text layers and 
                fine-tuned the entire model end-to-end. This staged approach helped 
                stabilize training, reducing early overfitting and leading to 
                better generalization across trials.
            </p>
            <p>
                After starting with an accuracy of 46% on the test set (worse than
                the baseline accuracy!), I managed to achieve an accuracy of 86.5% 
                on the test set by trial 27. However, it's easy to look at
                that accuracy and think that the model performs very well, 
                but what matters is if it will classify any given image/caption 
                pair correctly. For example, for the&nbsp;
                <a href="https://www.google.com/search?sca_esv=e3b14f0c443a1e2e&sxsrf=AE3TifOVCjEcLTGYAuHNrnj9hAnI3j7XbQ:1748073341462&q=dog+running+in+park&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeoJTKjrFjVxydQWqI2NcOhYPURIv2wPgv_w_sE_0Sc6QLvDm7a9ZTpW1I1zYSRrvqiq4OF5bD07JhZyLXCONIUIEVFdJLJXX5DugUlqFyggQfXEm7XK9rPMm38ja__DNgqOoTLRGDyJH28OEqul6d4agm_TG6qKeOaY-hg9E5x5d4YLixQ&sa=X&ved=2ahUKEwjqo7zU0LuNAxWmnmMGHZ4jFcgQtKgLegQIFBAB&biw=700&bih=707&dpr=1.35#vhid=PgQDRcrpzhg4sM&vssid=mosaic">
                stock image of a dog running through a park
                </a>&nbsp;
                I found on Google, the model should be able 
                to correctly classify whether the sentences in the table on the 
                right of the image below correspond to the image itself.
                
                <div className="image-gallery">
                    <div className="gallery-item-wide">
                        <img src="/projects/project11/pytorch-aidog-benchmark.png" alt="Ai-dog Benchmark" />
                        <div className="gallery-caption">Ai-dog Benchmark Concept</div>
                    </div>
                </div>
            </p>
            <p>
                Thus, I created my own benchmark called the Ai-dog Benchmark (a combination of 
                Aidan and Dog, invented by me). Within this benchmark is a series 
                of sentences that describes or does not describe the image, both 
                within and outside of the training set. I ended up testing three of
                my best accuracy models, each with a slight architecture difference
                between each other. Below is a subset of the results of the Ai-dog
                benchmark, testing sentences and phrases that should not relate
                to the image of the dog jumping in the park and comparing the output
                of the models against each other. 
                <strong> If you would like to see the full results, please contact me!</strong>

                <div className="image-gallery">
                    <div className="gallery-item-wide">
                        <img src="/projects/project11/pytorch-aidog-benchmark-results.png" alt="Ai-dog Benchmark Results" />
                        <div className="gallery-caption"> Subset of Ai-dog Benchmark Results</div>
                    </div>
                </div>
            </p>
            <p>
                As you can see from the table above, the model with the "Long Correct
                Captions" seems to misverify the sentences the least (cells in
                red are considered misverified). 

                Although the model is far from perfect, it can classify the captions 
                with a decent "intuitive" accuracy. It seems like the is some sort of 
                learning taking place as it can correctly identify a "dog" over 
                a "cat" or "house", but if the "dog" token is in the sentence with 
                other tokens in the training set, it seems to assume that the sentence 
                is correct. This sort of weight that certain tokens have corresponding 
                to features of the image is very interesting, as it seems to sway 
                the outcome if they're present and is something I'd like to explore
                in the future.
            </p>
            <p>
                This model uses a vision transformer (google/vit-base-patch16-224) 
                for generating image embeddings and BERT (bert-base-uncased) for 
                generating textual embeddings. It uses two stages with a tuned 
                learning rate for each stage, chooses the CLS token (last hidden 
                state) output over pooler output for embeddings, and performs 
                element-wise multiplication between embedding vectors to combine 
                them into one embedding. Below is the training & validation accuracy 
                and loss for the model as well as its confusion matrix based on 
                the test set.

                <div className="image-gallery">
                    <div className="gallery-item">
                        <img src="/projects/project11/pytorch-best-loss.png" alt="Best Model Loss Graph" />
                        <div className="gallery-caption"> Best Model Loss </div>
                    </div>
                    <div className="gallery-item">
                        <img src="/projects/project11/pytorch-best-accuracy.png" alt="Best Model Accuracy Graph" />
                        <div className="gallery-caption"> Best Model Accuracy </div>
                    </div>
                    <div className="gallery-item">
                        <img src="/projects/project11/pytorch-best-confusion-matrix.png" alt="Best Model Confusion Matrix" />
                        <div className="gallery-caption"> Best Model Confusion Matrix </div>
                    </div>
                </div>
            </p>
            <p>
                In conclusion, I was able to successfully identify whether or not 
                a given caption corresponded to an image, to a degree.

                Although the final model had a decent accuracy in classifying the 
                captions associated with the stock dog image, there are better
                design decisions I could have made in the benchmark I created to
                be more robust.&nbsp;
                
                {/*
                It only evaluated the model on one image with a select number of 
                sentences that happened to perform well on the model in trial 27. 
                I realize it could have been the case that this model performed well 
                specifically for this set of image/caption pairs, though I was
                limited by time to create a truly exhaustive test.
                */}
                
                Additionally after all of this experimentation, I realize that
                the model really only learns what caption correctly describes 
                the image and what caption does not correctly describe the image. 
                This incorrect caption is chosen randomly from another set of captions 
                in the dataset and could either relate to the image or not relate 
                to the image at all. To create a better model, it would probably 
                be beneficial to choose incorrect captions that only subtly did not 
                describe the image, instead of a random caption. This way, the model 
                could potentially learn if all the words in the caption described 
                the image rather than a select one or two that swayed the classification outcome.
            </p>
            <p>
                In the future, I would also like to add more examples to the training 
                set and try to have a more diverse selection of image/caption pairs 
                within the dataset (after post-analyzing a batch, I found there are 
                a LOT of examples relating to humans). Also, different text tokenizers 
                or embedding combinations could potentially affect the classification 
                accuracy as well. Another interesting idea is to have two captions 
                associated with each image and have the task to predict which caption 
                is correct. Overall, this project was a very insightful introduction 
                to developing multi-modal models and the challenges that come with 
                this type of image/text classification. And although this project
                overview was long, there was still a lot I did not cover! 
                
                <strong> Please contact me if you would like to see the code or 
                view the full report for this project :) </strong>
            </p>

        </div>
    );
}

