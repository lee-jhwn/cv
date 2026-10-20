// Hand-edited site content. Newest news first.

window.NEWS = [
  ["Oct 2026", 'New preprint: <a href="https://arxiv.org/abs/2610.20955">Probing Neural Audio Codecs with Speaker Traits and Speech Characteristics</a>.'],
  ["Sep 2026", '<a href="https://arxiv.org/abs/2609.36687">MyoCodec</a>, a streaming neural codec for EMG, is on arXiv with code, weights and audio samples.'],
  ["Jun 2026", "Joined the Audio and Acoustics Research Group at Microsoft Research, Redmond, as a research intern."],
  ["Mar 2026", "US Patent 12,573,375 granted."],
  ["Aug 2025", "Our Interspeech 2025 paper on accent strength and articulation won the Best Student Paper Award."],
  ["Aug 2023", "Started my Ph.D. at SAIL, University of Southern California."],
];

// Research-theme cards; each filters publications by one tag.
window.THEMES = [
  ["Speech", "Speech", "Speech synthesis, accents, and benchmarks for speech foundation models."],
  ["Articulatory", "Articulatory", "Real-time MRI of the vocal tract and articulatory representations."],
  ["Brain", "Brain", "Speech decoding from EEG, and brain activity during speech production."],
  ["Biosignal", "Biosignal", "Surface EMG and multimodal biosignals during speech production."],
  ["Streaming", "Streaming", "Low-latency neural codecs for speech and biosignals."],
  ["Music", "Music", "Interactive music generation that follows live input."],
];

// A link of null renders as plain text (e.g. "coming soon").
window.DEMOS = [
  { title: "MyoCodec", tag: "Biosignal", text: "Streaming neural codec for surface EMG. Listen to speech decoded from codec tokens.",
    links: [["Samples", "https://lee-jhwn.github.io/myocodec/"], ["Code", "https://github.com/lee-jhwn/myocodec"],
            ["Weights", "https://huggingface.co/lee-jhwn/myocodec"], ["Paper", "https://arxiv.org/abs/2609.36687"]] },
  { title: "RTMS", tag: "Music", text: "Real-time music sketching: low-latency generation that follows live user input.",
    links: [["Demo", "https://microsoft.github.io/real-time-music-sketching/"]] },
  { title: "Codec Trait Explorer", tag: "Speech", text: "Interactive map of where speaker traits live across codec codebooks.",
    links: [["Explorer", "https://jihwanlee15.github.io/codec-trait-depth/"], ["Paper", "https://arxiv.org/abs/2610.20955"]] },
  { title: "Articulatory Features from Surface EMG", tag: "Biosignal", text: "Predicting articulatory features from surface EMG during speech production (Interspeech 2025).",
    links: [["Samples", "https://lee-jhwn.github.io/IS25-emg-ema/"], ["Code", "https://github.com/lee-jhwn/IS25-emg-ema"],
            ["Paper", "https://arxiv.org/abs/2505.13814"]] },
  { title: "Listened Speech Decoding from EEG", tag: "Brain", text: "Reconstructing listened speech from EEG (ICASSP 2025), building on FESDE (Interspeech 2024).",
    links: [["Samples", "https://lee-jhwn.github.io/icassp25-fesde-phoneme/"], ["Code (ICASSP 2025)", "https://github.com/lee-jhwn/icassp25-fesde-phoneme"],
            ["Code (Interspeech 2024)", "https://github.com/lee-jhwn/fesde"]] },
];
