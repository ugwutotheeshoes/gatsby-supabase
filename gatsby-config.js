module.exports = {
  plugins: [
    // {
    //   resolve: `gatsby-source-supabase`,
    //   options: {
    //     supabaseUrl: 'https://fqsvpneuxkgvripbrzdf.supabase.co', 
    //     supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxc3ZwbmV1eGtndnJpcGJyemRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDI4ODQsImV4cCI6MTk2Nzg3ODg4NH0.zjYvNm6RRfEFqc2Ei13mKbDKuNJ5V1q6WIaRQgL8STQ',
    //     types: [
    //       {
    //         type: "User",
    //         query: (client) => client.from("users").select("*"), //sync or async
    //       },
    //       {
    //         type: "Project",
    //         query: (client) => client.from("projects").select("*"), 
    //       },
      //     {
      //       type: "pages",
      //       query: (client) => client.rpc("increment", { row_id: 1 }), 
      //       .update({ name: "Mordor" })
      // .eq("name", "Image impression");
      //     },
          // const { data, error } = await gatsbyConfig.rpc("increment", { row_id: 1 });
  //       ],
  //     },
  //   },
  ],
};