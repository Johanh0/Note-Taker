// Const
const saveBtn = document.querySelector(`.fa-check`);

// Editor Configuration
const editor = new EditorJS({
    holder: 'editorjs',

    tools: {
        header: {
            class: Header,
            config: {
                placeholder: 'Enter a header',
                levels: [1, 2, 3, 4],
                defaultLevel: 1
              },
        
            inlineToolbar: [`link`],
        },
        list: {
            class: List,
            inlineToolbar: [
                `link`,
                `bold`
            ]
        },
        embed: {
            class: Embed,
            inlineToolbar: false,
            config: {
                services: {
                    youtube: true,
                    coub: true
                }
            }
        },
        checklist: {
            class: Checklist,
            inlineToolbar: true,
        },
        raw: RawTool,
    }
  });

saveBtn.addEventListener(`click`, () => {
    editor.save().then((outputData) => {
        console.log(outputData);
        }).catch((error) => {
        console.log(`Something went wrong`);
    })
});

// Functions


// Tippy for trash icons
tippy(`.fa-trash`, {
    content: `Remove`,
    placement: `right`
})

tippy(`.fa-check`, {
    content: `Save`,
    placement: `bottom`
})