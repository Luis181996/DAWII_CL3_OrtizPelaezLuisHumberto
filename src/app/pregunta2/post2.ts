export interface pregunta2{
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: {
          name: string;
          url: string;
        };
        location: string;
        episode: string[];
        url: string;
        created: string;
      }