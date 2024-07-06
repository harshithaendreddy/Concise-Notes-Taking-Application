const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click",addNote);

function addNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tool">
            <div class="tool-item">
                <i class="save fas fa-save"></i> 
                <span class="label">Save</span>
            </div>
            <div class="tool-item">
                <i class="trash fas fa-trash"></i> 
                <span class="label">Delete</span>
            </div>
        </div>
        <textarea></textarea>
    `;

    const save = note.querySelector(".save");
    const trash = note.querySelector(".trash");
    const textarea = note.querySelector("textarea");

    save.addEventListener("click", saveNotes);
    textarea.addEventListener("input", saveNotes);
    trash.addEventListener("click", () => {
        note.remove();
        saveNotes();
    });

    main.appendChild(note);
}


function saveNotes() {
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note => note.value);

    localStorage.setItem("notes", JSON.stringify(data));
}


function loadNotes() {
    const lsNotes = JSON.parse(localStorage.getItem("notes"));

    if (lsNotes !== null) {
        lsNotes.forEach(noteText => {
            const note = document.createElement("div");
            note.classList.add("note");
            note.innerHTML = `
                <div class="tool">
                    <div class="tool-item">
                        <i class="save fas fa-save"></i> 
                        <span class="label">Save</span>
                    </div>
                    <div class="tool-item">
                        <i class="trash fas fa-trash"></i> 
                        <span class="label">Delete</span>
                    </div>
                </div>
                <textarea>${noteText}</textarea>
            `;

            const save = note.querySelector(".save");
            const trash = note.querySelector(".trash");
            const textarea = note.querySelector("textarea");

            save.addEventListener("click", saveNotes);
            textarea.addEventListener("input", saveNotes);
            trash.addEventListener("click", () => {
                note.remove();
                saveNotes();
            });

            main.appendChild(note);
        });
    }
}
document.addEventListener("DOMContentLoaded", function() {
    loadNotes();
});



//loadNotes();


