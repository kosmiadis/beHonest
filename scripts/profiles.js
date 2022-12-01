const people = {
    fetchPeople: function (){
        fetch('https://random-data-api.com/api/v2/users?size=100&is_xml=true')
        .then(res => res.json())
        .then(data => console.log(data))
    },
    displayPeople: function () {

    }
}
