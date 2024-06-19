import fitz  # PyMuPDF

# Define the path to the PDF file
pdf_path = r"C:\Users\lenovo\Documents\GitHub\DD-105\PY\Attestation de participation au cours (1).pdf"

# Open the PDF file
doc = fitz.open(pdf_path)

# Define the text to find and the replacement text
search_text = "41 h. 34 min."
replace_text = "50 h. 34 min."

# Iterate through the pages to find and replace the text
for page_num in range(doc.page_count):
    page = doc.load_page(page_num)
    text_instances = page.search_for(search_text)

    # Replace the found text with the new text
    for inst in text_instances:
        # Redact the old text
        page.add_redact_annot(inst, fill=(1, 1, 1))
        page.apply_redactions()
        
        # Insert the new text over the same location
        page.insert_text(inst.tl, replace_text, fontsize=12, color=(0, 0, 0), fontname="helv")

# Save the modified PDF to a new file
output_path = r"C:\Users\lenovo\Documents\GitHub\DD-105\PY\Modified_Attestation.pdf"
doc.save(output_path)

print(f"PDF has been modified and saved as {output_path}")
