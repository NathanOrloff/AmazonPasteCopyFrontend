import { 
    PASTE_API_ENDPOINT,
    POST_PASTE
 } from "../Constants/endpoint"

type FileContent = {
    title: string;
    data: string;
}

type PostData = {
    fileContent: string;
    storeDays: number;
};
  
type PostResponse = {
    success: boolean;
    id?: string;
};

export async function postPaste(title: string, data: string, storeDays: number): Promise<PostResponse> {
    try {
        const endpoint = `${PASTE_API_ENDPOINT}${POST_PASTE}`;
        const fileContent: FileContent = { title: title, data: data };
        const base64 = btoa(
            new TextEncoder().encode(JSON.stringify(fileContent))
              .reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
        const postData: PostData = { fileContent: base64, storeDays: storeDays };
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: PostResponse = await response.json();
        return result;
    } catch (error) {
        console.error('Post failed: ', error);
        return { success: false };
    }
}