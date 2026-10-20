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
  ["Biosignal", "Biosignal-to-Speech", "Decoding speech and articulation from EEG and surface EMG."],
  ["Articulatory", "Articulatory Speech", "Real-time MRI of the vocal tract and articulatory representations."],
  ["Streaming", "Streaming Codecs", "Low-latency neural codecs for speech and biosignals."],
  ["Speech", "Speech Generation & Analysis", "TTS, accents, and benchmarks for speech foundation models."],
  ["Music", "Real-time Music", "Interactive music generation that follows live input."],
];

// A link of null renders as plain text (e.g. "coming soon").
window.DEMOS = [
  { title: "MyoCodec", tag: "Biosignal", text: "Streaming neural codec for surface EMG. Listen to speech decoded from codec tokens.",
    links: [["Samples", "https://lee-jhwn.github.io/myocodec/"], ["Code", "https://github.com/lee-jhwn/myocodec"],
            ["Weights", "https://huggingface.co/lee-jhwn/myocodec"], ["Paper", "https://arxiv.org/abs/2609.36687"]] },
  { title: "RTMS", tag: "Music", text: "Real-time music sketching: low-latency generation that follows live user input.",
    links: [["Demo coming soon", null]] },
  { title: "Codec Trait Explorer", tag: "Speech", text: "Interactive map of where speaker traits live across codec codebooks.",
    links: [["Paper", "https://arxiv.org/abs/2610.20955"], ["Explorer coming soon", null]] },
];
