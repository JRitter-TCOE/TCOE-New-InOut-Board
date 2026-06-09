export async function postData(url='', data={}) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        //const responseClone = response.clone();
        //console.log(await responseClone.text());


        const result = await response.json();
        //console.log('Success:', result);
        return result.data;
    }
    catch (error) {
        console.error("Error:", error.message);
    }
}