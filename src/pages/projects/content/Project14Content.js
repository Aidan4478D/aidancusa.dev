// src/pages/projects/content/Project14Content.js
import React from 'react';
import '../../../styles/ProjectContent.css';

export default function Project14Content() {
    return (
        <div className = "project-content-box">
            <h2>Environmental Impact of AI Models</h2>
            <p>
                For my Ethics of AI final project, I investigated the 
                environmental footprint of fine-tuning large language models. 
                The central question I was trying to answer was: &nbsp;
                <strong>"How do data-center location and 
                accelerator choice affect the energy and water footprints of 
                fine-tuning distilled versus full-size transformer models?"</strong> 
                As AI models become larger, understanding their energy and water 
                consumption is a critical ethical concern, especially considering 
                the massive resource draw of data centers.
            </p>
            <p>
                The project compared full-size "teacher" models (BERT-base and 
                RoBERTa-base) against their smaller "student" counterparts (DistilBERT 
                and DistilRoBERTa). These distilled models are trained to mimic 
                the larger model's output, retaining significant performance 
                (e.g., DistilBERT keeps 97% of BERT's) while being much smaller. 
                I fine-tuned all four models on two different GLUE tasks: SST2 
                (sentiment analysis, 67,349 training examples) and MRPC (paraphrase 
                detection, 3,668 training examples). To analyze 
                hardware impact, I ran tests across five different accelerators 
                in Google Colab (A100 GPU, L4 GPU, T4 GPU, TPU v2-8, and an EPYC CPU). To test 
                location, I ran the T4 GPU experiments in four distinct data 
                center regions: Groningen (NL), Las Vegas (NV), Singapore, 
                and The Dalles (OR). 

                Additonally, I noticed that some&nbsp;
                <a href="https://docs.cloud.google.com/colab/docs/locations"> 
                    data centers that host Google Colab resources
                </a>&nbsp;
                are labeled as "Low CO2" locations. 
                Thus, I wanted to see whether or not these "Low CO2" locations 
                corresponded to lower training times or less resource consumption. 
            </p>
            <p>
                Using <a href="https://calculator.green-algorithms.org/"> 
                    Green Algorithms Calculator
                </a>&nbsp;
                to compute energy usage (Wh), and equations from the 2023 paper&nbsp;
                <a href="https://arxiv.org/abs/2304.03271"> 
                    "Making AI Less 'Thirsty': Uncovering and Addressing the Secret Water Footprint of AI Models"
                </a> to estimate water consumption (L), each datacenter's 
                resource consumption was calculated.

                I used Google’s data center PUE performance report to obtain the 
                PUE (power usage efficiency) value, and Microsoft's publicly 
                available data to determine the WUE 
                (water usage efficiency) and the EWIF (electricity water intensity 
                factor) values. From there, I started fine-tuning models in 
                different locations with different devices. For each model 
                iteration, I fine-tuned for one epoch with a batch size of 16, 
                a learning rate of 2e-5, and a max length of 128. I chose one 
                epoch as I wanted to run a lot of tests, and it already took a 
                long time to fine-tune for just one epoch. 
            </p>
            <p>
                After running 64 different tests, I found that the <strong>distilled 
                models were consistently ~2x more 
                resource-efficient</strong> than their base counterpart, using 
                approximately half the energy and water regardless of the specific task. 
                Additionally, choosing the specific hardware to train on is very important. 
                Fine-tuning on a <strong>CPU was exceptionally 
                inefficient</strong>, consuming vastly more energy and water than 
                any GPU or TPU. Resource usage scaled with the "powerfulness" of 
                the accelerator, with the A100 GPU being the most efficient
                (least to most efficient: CPU → TPU v2-8 → T4 GPU → L4 GPU → A100 GPU).

            </p>
            <div className="image-gallery">
                <div className="gallery-item-wide">
                    <img src="/projects/project14/ethics_device_water_usage.png" alt="Graph showing average energy usage by device and model type" />
                    <div className="gallery-caption">Average SST2 Water Usage (L) by Device and Model Type</div>
                </div>
                {/*
                <div className="gallery-item-wide">
                    <img src="/projects/project14/ethics_device_water_table.png" alt="Graph showing average water usage by device and model type" />
                    <div className="gallery-caption">Average SST2 Water Usage (L) by Device and Model Type</div>
                </div>
                */}
            </div>
            <p>
                Perhaps the most surprising findings related to data center 
                location. While location had almost no impact on energy 
                consumption (all tests were within 1.25% of each other), 
                it had a <strong>major impact on water usage</strong>. The data 
                center in Groningen (NL) was by far the most water-efficient. 
                After doing some research, I found that this was largely due to Northern 
                Europe's cool climate enabling highly water-efficient&nbsp;
                <a href="https://www.youtube.com/watch?v=wfAFv6ikmkE&themeRefresh=1">
                "free cooling"
                </a>&nbsp;
                methods on-site. This key finding highlighted a critical ethical 
                trade-off: Does a "Low CO2" data center necessarily mean it is 
                also less resource intensive in terms of total water consumption?
                

                <div className="image-gallery">
                    <div className="gallery-item-wide">
                        <img style={{height:175}}src="/projects/project14/ethics_location_water_usage_sst2.png" alt="Graph showing average water usage by location for T4 GPU" />
                        <div className="gallery-caption">Average Water Usage (L) on T4 GPU for SST2 by Model Type and Location</div>
                    </div>
                    <div className="gallery-item-wide">
                        <img style={{height:175}}src="/projects/project14/ethics_location_energy_usage_sst2.png" alt="Graph showing average water usage by location for T4 GPU" />
                        <div className="gallery-caption">Average Energy Usage (Wh) on T4 GPU for SST2 by Model Type and Location</div>
                    </div>
                </div>
            </p>
            <p>

                
            </p>
            <p>
                To answer this question, I analyzed the water and energy consumption 
                of Las Vegas (NV) and The Dalles (OR) fine-tuned on the same GPU 
                and the same task. The Dalles is indicated as a "Low CO2" datacenter 
                while Las Vegas is not. In the charts below, Las Vegas is the left 
                set of bars while The Dalles is the right set of bars.

                Thus, we can clearly see that fine-tuning both base and distilled
                models on the same task uses nearly identical energy levels.

                But counter-intuitively, the data center in the desert (Nevada) used 
                less total water for fine-tuning than the data center in Oregon. 
                
                This initially surprised me as I would think "Low CO2" datacenters 
                would correspond to less natural resources being used as well.

                However, after doing more research, I found that a <strong>"Low 
                Carbon" label does not mean low resource intensity</strong>. 
                That label only refers to the <i>source</i> of the energy, not the total 
                energy.

                Further research showed the Oregon facility sits on a hydro-heavy 
                grid which uses significantly more water per kWh of electricity off-site. 
            </p>
            <div className="image-gallery">
                <div className="gallery-item-full-wide">
                    <img src="/projects/project14/ethics_low_carbon_comparison.png" alt="Graph showing average water usage by location for T4 GPU" />
                    <div className="gallery-caption">Average Water Usage (L) on T4 GPU for SST2 by Model Type and Location</div>
                </div>
            </div>
            <p>
                Overall, I discovered that DistilBERT & DistilRoBERTa use ~2x less 
                resources than their larger counterparts (despite being ~40% and 
                ~34% smaller, respectively) for both SST2 and MRPC. I found that 
                The resource usage decreases as the "powerfulness" of the device 
                increases. For the tested devices, the relative resource usage 
                from most to least is: CPU (AMD EPYC 7B12) → TPU (v2-8) → T4 GPU 
                → L4 GPU → A100 GPU. In terms of bang-for-buck for compute units 
                & resource usage, the L4 GPU seems like the best option to fine-tune 
                on as it consumes similar energy to the A100 GPU but at a much 
                lower compute unit cost. Location also doesn’t play that big of 
                a role in terms of energy usage, however, it plays a huge role in 
                terms of water usage. This is due to the onsite & offsite water 
                usage of the datacenter as well as its power usage effectiveness. 
                Finally, a "Low CO2" datacenter doesn't necessarily mean that 
                it's less resource-intensive than other datacenters.
            </p>
            <p>
                In the future, I’d like to run the same experiment with different 
                models with distilled counterparts (instead of just the BERT family 
                of models), as well as connecting all of the devices to the same 
                server location. I would also like to analyze resource usage during 
                inference instead of fine-tuning could also be interesting to look 
                at, as well as expanding outside of language models and LM-related 
                tasks. The project overall opened my eyes to the environmental 
                impact that we have when we choose the datacenter that we fine-tune 
                on, and how we can directly mitigate resource usage just by 
                connecting to a specific server.
            </p>
        </div>
    );
}
