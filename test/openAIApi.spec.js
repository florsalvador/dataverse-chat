/*eslint-disable*/
import { communicateWithOpenAI } from '../src/lib/openAIApi.js';

describe('communicateWithOpenAI', () => {
  test('Debería comunicarse con el api de OpenAI', async () => {
    const response = {
      data: {
        choices: [{
          message: {
            content: "Se logra comunicar con OpenAI"
          }
        }]
      }
    };

    global.axios = {
      post: jest.fn(() => Promise.resolve(response))
    };

    // CON ESPIA
    const spyOn = jest.spyOn(global.axios, 'post');

    await communicateWithOpenAI(["Hola, te gusta que te rasquen la pancita?"])
      .then(data => {
        expect(data).toBe("Se logra comunicar con OpenAI");
        expect(spyOn).toHaveBeenCalled();
      });

    spyOn.mockRestore();
    delete global.axios; // Limpiamos el mock después de la prueba

    // SIN ESPIA
    // const result = await communicateWithOpenAI("prompt");

    // expect(result).toBe("Se logra comunicar con OpenAI");

    // expect(global.axios.post).toHaveBeenCalled();

    // delete global.axios; // Limpiamos el mock después de la prueba
  });
});

/////////////////////////////////////////////////////

// describe('communicateWithOpenAI', () => {
//   it('Debería comunicarse con el api de OpenAI', async () => {
//     const response = {data: {
//       choices: [
//         { message: { content: "Response from OpenAI" } }
//       ]
//     }}
//     global.axios = jest.fn( () => Promise.resolve(response))

//     //response.data.choices[0].message.content;

//     // Configurar el mock de axios para devolver una respuesta simulada
//     const spyAxios = jest.spyOn(communicateWithOpenAI()).mockResolvedValue({
//       data: {
//         choices: [
//           { message: { content: "Response from OpenAI" } }
//         ]
//       }
//     });
//     // // Llamar a la función communicateWithOpenAI con mensajes de prueba
//     const prompt = ["Hola, te gusta que te rasquen la pancita"];
//     await communicateWithOpenAI(prompt)
//       .then(response => {
//         expect(response.data.choices.message.content).toBe("Response from OpenAI");
  
//         expect(spyAxios).toHaveBeenCalled();
//       }
//       );

//     spyAxios.mockRestore();

//     /////////////////////////////////////////////laboratoria
//     // return communicateWithOpenAI().then(data => {
//     //   expect(data).toBe('example');
//     // });
//     ////////////////////////////////////
//   });
// });




// import { communicateWithOpenAI } from '../src/lib/openAIApi.js';

// describe('communicateWithOpenAI', () => {
//   test('Debería comunicarse con OpenAI', async () => {
//     const response = {
//       data: {
//         choices: [{
//           message: {
//             content: "Se logra comunicar con OpenAI"
//           }
//         }]
//       }
//     };

//     global.axios = jest.fn(() => Promise.resolve(response));

//     const spyCommunicate = jest.spyOn(communicateWithOpenAI).mockResolvedValue(axios);

//     await communicateWithOpenAI()
//       .then(response => {
//         expect(response.data.choices[0].message.content).toBe("Se logra comunicar con OpenAI");

//         expect(spyCommunicate).toHaveBeenCalled();
//       }
//       );

//       spyCommunicate.mockRestore();

//   });
// });