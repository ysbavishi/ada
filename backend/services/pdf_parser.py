from unstructured.partition.pdf import partition_pdf
from langchain_openai import ChatOpenAI

def process_pdf(pdf_location: str):
    print("called")
    pdf_elements = partition_pdf(pdf_location, strategy='fast')
    pdf_text = "" 
    for ele in pdf_elements:
        pdf_text += ele.text
    
    llm = ChatOpenAI(
        model="gpt-4o",
        temperature=0,
        max_tokens=None,
        timeout=None,
        max_retries=2,
    )

    messages = [
        (
            "system",
            "summarise the given text in 200 words"
        ),
        (
            "human",
            pdf_text
        )
    ]

    ai_message = llm.invoke(messages)
    return ai_message.content

