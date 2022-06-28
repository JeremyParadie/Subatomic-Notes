# Subatomic Notes

[Run in browser](https://jeremyparadie.github.io/Subatomic-Notes/) 

[Chat in Discord](https://discord.gg/HtFNjYdSnE)

[Raise an issue](https://github.com/jeremyparadie/Subatomic-Notes/issues)

https://user-images.githubusercontent.com/14352758/176197576-06eaea27-6282-4624-b2eb-625ef13f558e.mp4

## What is it?
Subatomic Notes is an experimental prototype tool for mapping highly networked thoughts and wrangling them into a single sequence for dissemination. It is intended to be used for sensemaking, knowledge synthesis and management, source reference management, and as a tool to facilitate writing. It is built on GUN, a decentralized graph database that enables realtime collaboration between users. If it becomes useful, it might be developed as an Obsidian and/or Logseq plugin and/or its own standalone program. 

## Why not use one of the hundreds of existing tools?
I have not come across a tool for thought that is truely compatible with the way I think. So I decided to make my own with the specific structure, features, and workflow that I think will work for me. It is an experiment; hopefully it works for me and other people find it useful as well.

## What are the structure, features, and workflow?
##### Thoughts and connections
Each thought - a short sentence or phrase - is represented visually as a node in a graph, and can be semantically linked to other thoughts with visual connections. Thoughts can be arbitrarily connected, enabling both diverging and converging thought patterns.

##### Groups
Thoughts can be grouped together, enabling a layer of abstraction. Groups behave similarly to thoughts in that they can be linked to other thoughts or other groups.

##### Chains
Each group may be represented by a special sequence of thoughts within it, called a chain. Chains define a narrative path through a web of thoughts. They have a single thought at the beginning and a single thought at the end.

##### Markdown files
A chain can be used to generate the contents of a markdown file. Editing that markdown file will also update the contents of the chain. 

> Most of these [features](#feature-roadmap) have not been implemented yet, but you can test what has been implemented so far. Follow this link to [run in browser](https://jeremyparadie.github.io/Subatomic-Notes/).

## How do I use it?
1. Follow this link to [run in browser](https://jeremyparadie.github.io/Subatomic-Notes/).
2. Click anywhere on the background to create an empty node.
3. Type a thought.
4. To move a node to a different location, simply press-drag-release. 
6. To connect two nodes together, hold shift and click on a node, and then click on another node.
7. To select multiple nodes, hold `ctrl` and click on multiple nodes.
8. To delete selected nodes, on Windows, press `delete`.  On Mac, press `fn` + `delete`.

> Data should persist after a refresh, but is wiped periodically. 

## There are tons of bugs!
I know. Follow this link to [report a bug](https://github.com/jeremyparadie/Subatomic-Notes/issues).

## Why is it called _Subatomic Notes_?
_Subatomic Notes_ is a reference to the concept of _Atomic Notes_, used in Zettelkasten note-taking systems popular in personal knowledge management circles. The idea is that each note is a file about one particular idea, and notes can contain inline references or hyperlinks to other notes, enabling a knowledge graph to emerge. I've been frustrated with this paradigm because I want to be able to link to individual thoughts and be able to distinguish between different types of links. This project aims to break atomic notes into their constituent components and be able to work with an manipulate those components natively. Thus, the project is named _Subatomic Notes_.

## How do I show support?
Let me know what you think! Follow this link to [chat in Discord](https://discord.gg/HtFNjYdSnE).

## Feature Roadmap
- [x] Thought nodes
- [x] Decentralized graph database
- [x] Real-time multi-user collaboration
- [x] Typeless links
- [ ] Typed links
- [ ] Groups
- [ ] Node version control
- [ ] Chains
- [ ] Chain-driven markdown generation
- [ ] Markdown GUI with visual connections
- [ ] Markdown edits propagate to chain
- [ ] Primary source file import
- [ ] Source reference tracking
- [ ] User accounts and persistent data
