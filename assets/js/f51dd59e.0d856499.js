"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[752],{8665:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>h});var o=r(4848),i=r(8453);const n={},s="Automerge 2.2: Rich Text",a={permalink:"/blog/2024/04/06/richtext",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/blog/2024-04-06-richtext/index.mdx",source:"@site/blog/2024-04-06-richtext/index.mdx",title:"Automerge 2.2: Rich Text",description:"We are delighted to announce the release of rich text support in Automerge, including a fully supported ProseMirror binding as the initial reference implementation. This means that you can now build collaborative applications on Automerge with realtime and asynchronous editing of rich text including inline formatting, block elements, and more.",date:"2024-04-06T00:00:00.000Z",tags:[],readingTime:5.36,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,nextItem:{title:"Merry Commitmas - a year-end recap of what's new in Automerge",permalink:"/blog/2023/12/21/merry-commitmas"}},c={authorsImageUrls:[]},h=[{value:"Demo",id:"demo",level:2},{value:"Why is rich text a custom datatype in Automerge?",id:"why-is-rich-text-a-custom-datatype-in-automerge",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"How can I try it?",id:"how-can-i-try-it",level:2},{value:"Commercial Support for Automerge",id:"commercial-support-for-automerge",level:2}];function l(e){const t={a:"a",em:"em",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"We are delighted to announce the release of rich text support in Automerge, including a fully supported ProseMirror binding as the initial reference implementation. This means that you can now build collaborative applications on Automerge with realtime and asynchronous editing of rich text including inline formatting, block elements, and more."}),"\n",(0,o.jsxs)(t.p,{children:["If you want to get started building right away, check out the library here: ",(0,o.jsx)(t.a,{href:"https://github.com/automerge/automerge-prosemirror",children:"https://github.com/automerge/automerge-prosemirror"})]}),"\n",(0,o.jsx)(t.p,{children:"For everyone else, let's start with a demo, before moving on to discuss what rich text is and how Automerge helps you use it."}),"\n",(0,o.jsx)(t.h2,{id:"demo",children:"Demo"}),"\n",(0,o.jsx)("iframe",{src:"http://automerge.org/automerge-prosemirror",style:{width:"100%",resize:"both",height:"500px"}}),"\n",(0,o.jsx)(t.p,{children:"On its own, this should seem pretty boring: it's a rich text editor which  supports most of the features users typically expect from a rich text editor. What makes this demo interesting is the support for real time collaboration which means that we can manage concurrent changes to complex formatting, like this:"}),"\n",(0,o.jsxs)("video",{controls:!0,autoPlay:!0,loop:!0,style:{width:"100%"},children:[(0,o.jsx)("source",{src:"/img/automerge-formatting-change.webm",type:"video/webm"}),(0,o.jsx)(t.p,{children:"Merging formatting and structure changes in Automerge"})]}),"\n",(0,o.jsxs)(t.p,{children:["The Automerge-ProseMirror binding is designed to be easy to integrate into any ProseMirror editor you might want to build.  To see how it works, refer to ",(0,o.jsx)(t.a,{href:"/docs/cookbook/rich-text-prosemirror-vanilla",children:"the cookbook"}),", but the short story is that it takes just a few lines of code."]}),"\n",(0,o.jsx)(t.h2,{id:"why-is-rich-text-a-custom-datatype-in-automerge",children:"Why is rich text a custom datatype in Automerge?"}),"\n",(0,o.jsx)(t.p,{children:"Automerge aims to make the experience of building production-ready collaborative applications as close as possible to the ease and speed of writing a local prototype. This is why the Automerge API focuses on giving you something that feels like just modifying a local Javascript object. Automerge provides a consistent abstraction for your data so that you can focus on your users' needs and not on the finer points of storage and synchronization."}),"\n",(0,o.jsxs)(t.p,{children:["In this context, rich text poses a problem. As we discuss at length in our past paper, ",(0,o.jsx)(t.a,{href:"https://inkandswitch.com/peritext",children:"Peritext"}),", rich text doesn't map easily on to plain-text or tree structures. Attempting to do so can lead to incorrect behaviour during a merge."]}),"\n",(0,o.jsx)(t.p,{children:"For a real-world example of the kind of data-loss that is difficult to avoid with traditional approaches, here's an example using the yjs prosemirror bindings:"}),"\n",(0,o.jsxs)("video",{controls:!0,autoPlay:!0,loop:!0,style:{width:"100%"},children:[(0,o.jsx)("source",{src:"/img/yjs-structure-change.webm",type:"video/webm"}),(0,o.jsx)(t.p,{children:"Conflicting structure changes in yjs can cause loss of text"})]}),"\n",(0,o.jsx)(t.p,{children:"When the edits from the two sides come together, the representation of the data requires the editor to choose between either adding a list item, or converting the list into a paragraph. In this case, the extra list item is lost (though it could have been the opposite.)"}),"\n",(0,o.jsx)(t.p,{children:"This kind of conflict is very rare in online editing scenarios. It only occurs when two users manage to submit conflicting structural edits concurrently. This becomes much more likely during longer sessions of offline collaboration Automerge is designed to support. Our goal is to ensure consistent and correct behaviour under all network and collaboration conditions, so for us this was an important problem."}),"\n",(0,o.jsx)(t.p,{children:"Our goal has been to provide an implementation of rich-text support which allows both edits to be kept."}),"\n",(0,o.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,o.jsx)(t.p,{children:"Rather than representing rich text as a tree structure like HTML, we represent it as plain text annotatedwith spans and blocks:"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"examples"}),(0,o.jsx)(t.th,{children:"behaviour"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"spans"}),(0,o.jsx)(t.td,{children:"<a> <em>"}),(0,o.jsx)(t.td,{children:"overlapping"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"blocks"}),(0,o.jsx)(t.td,{children:"<p> <li>"}),(0,o.jsx)(t.td,{children:"independent"})]})]})]}),"\n",(0,o.jsxs)(t.p,{children:["The difference between the two is that text may appear in many spans, but should only ever be in a single block. A sentence may be bold ",(0,o.jsx)(t.em,{children:"and"})," italic, but it cannot be simultaneously part of two paragraphs."]}),"\n",(0,o.jsxs)(t.p,{children:["Formatting spans, originally described in ",(0,o.jsx)(t.a,{href:"https://inkandswitch.com/peritext",children:"Peritext"})," are conceptually stored outside the text. A formatting span has a beginning and an end within the text sequence and a flag detailing whether the span should expand when characters are inserted at the boundaries of the span."]}),"\n",(0,o.jsx)(t.p,{children:'Block markers have a type - such as "ordered list item" - and parents - such as "blockquote". The parents represent the hierarchical structure of the document. Block markers are inserted into the sequence of text characters.'}),"\n",(0,o.jsx)(t.p,{children:"These elements map quite closely to user actions whilst editing. Typically a text editor allows you to highlight a sequence of characters and format them - regardless of whether they are in different regions of the document (try highlighting and bolding half of a list item and preceding paragraph in Google Docs for example). On the other hand, inserting a new list item is usually achieved by pressing Enter at the end of the current list item - inserting a block marker; and indenting a list item is done by pressing a button in the toolbar - inserting a new parent into the block parents."}),"\n",(0,o.jsx)(t.p,{children:"Choosing operations on the underlying data structure which map well to typical actions performed while editing text means we can provide accurate representations of the difference between two versions of the text. Here's the same  structure change example in automerge"}),"\n",(0,o.jsxs)("video",{controls:!0,autoPlay:!0,loop:!0,style:{width:"100%"},children:[(0,o.jsx)("source",{src:"/img/automerge-structure-change.webm",type:"video/webm"}),(0,o.jsx)(t.p,{children:"Structure change in Automerge preserves edits"})]}),"\n",(0,o.jsx)(t.p,{children:"We plan to write a more detailed description of these algorithms (which were developed in concert with Martin Kleppmann) in a future paper."}),"\n",(0,o.jsx)(t.h2,{id:"how-can-i-try-it",children:"How can I try it?"}),"\n",(0,o.jsxs)(t.p,{children:["Support for rich text landed in Automerge 2.2 and you can find a writeup of the API ",(0,o.jsx)(t.a,{href:"/docs/documents/rich_text",children:"here"}),". You can find several examples of how to use the Prosemirror bindings in the ",(0,o.jsx)(t.a,{href:"https://github.com/automerge/automerge-prosemirror",children:"Automerge-ProseMirror"}),"  repository. We've also made a ",(0,o.jsx)(t.a,{href:"https://github.com/automerge/prosemirror-quickstart",children:"simple starter project"})," to a starter project you can fork. Please feel free to experiment with the playground above. If you find any behaviours that seem surprising, we'd love to hear about it. Whatever you're doing, we hope you'll join us in the ",(0,o.jsx)(t.a,{href:"https://discord.gg/TrgN9FkYSa",children:"Automerge Discord"})," and let us know how you're getting on."]}),"\n",(0,o.jsx)(t.h2,{id:"commercial-support-for-automerge",children:"Commercial Support for Automerge"}),"\n",(0,o.jsx)(t.p,{children:"If you're a business building a commercial product on top of Automerge, we recommend becoming a commercial sponsor. Automerge is only available for production use thanks to our supporters and we are highly motivated to ensure their success."}),"\n",(0,o.jsx)(t.p,{children:"Sponsors of the project receive ongoing support from our team, including architecture review early in a project, advice around scaling or launch issues, and extra visibility and influence into our roadmap. Sponsors also get a private Discord channel for asking questions specific to their project."}),"\n",(0,o.jsxs)(t.p,{children:["Email ",(0,o.jsx)(t.a,{href:"mailto:alex@inkandswitch.com",children:"alex@inkandswitch.com"})," or message us in the ",(0,o.jsx)(t.a,{href:"https://discord.gg/TrgN9FkYSa",children:"Automerge Discord"})," if you'd like to learn more about sponsorship and support options."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var o=r(6540);const i={},n=o.createContext(i);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);