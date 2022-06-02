var images = ["https://cdn.donmai.us/original/2e/f4/2ef46c5b72d8453db6c8c171455ac53a.jpg","https://i.pinimg.com/originals/e8/c2/89/e8c289174aace4283272adc5087778d7.jpg", "https://i.pinimg.com/originals/8e/9a/4a/8e9a4af8a39df78945bfcd950f663286.jpg" , "https://w2.chabad.org/media/images/730/LrcM7308021.jpg", "https://cdn.anime-planet.com/characters/primary/soras-mother-okaeri-1.jpg?t=1625902081", "https://www.teahub.io/photos/full/112-1125967_anime-girl-profile-view-choker-short-hair-coat.jpg","https://data.whicdn.com/images/107666263/original.jpg"];

var names = ["Family Book","Sumitra - Maternal Grandmother", "Shobha Dharmaraj - grandmother", "Prashob Raj - Father", "Gitali Mandal - Mother","Samanwita Raj - me", "Niya Raj - Sister"];

var age = [, 66, 61, 38, 40, 10,1]

/*

We must sort the elements present inside the array "age" to print the age value of the family member for the respective family member.

Write: "age.sort()"

*/

age.sort() ;

/*

We must reverse the elements present inside the array "age" to print the age value of the family member for the respective family member.
After sorting the array "age", all the elements must be arranged in an ascending manner and our family book consists of the exact opposite list i.e. all the first member is Grandfather followed by father and so on ie. in the decending manner.

Write: "age.reverse()"

*/
age.reverse() ;

var i = 0;

function update()
{
    i++;

    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array )
    {
     i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    /*

    To find the maximum age value amongst the family members, we need to use the Math, and the max function together and to display the maximum age, we need print the value. Thus make use of console.

    Write:  "var max_number = Math.max.apply(Math, age)
            "console.log("The highest age is: ", max_number)"

    */

    var max_number = Math.max .apply(Math,age );
    console.log("The highest age is: ",max_number  );

    /*

    To find the minimum age value amongst the family members, we need to use the Math, and the min function together and to display the maximum age, we need print the value. Thus make use of console.

    Write:  "var min_number = Math.min.apply(Math, age)
    "console.log("The lowest age is: ", min_number)"

    */

    var min_number = Math.min .apply(Math, age );
    console.log("The lowest age is: ", min_number );
}