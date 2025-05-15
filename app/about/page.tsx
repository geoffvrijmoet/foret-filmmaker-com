import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto py-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Placeholder for headshot - will be replaced with actual image later */}
        <div className="col-span-1 aspect-square bg-gray-200 relative rounded-md overflow-hidden">
          <Image
            src="/images/dustin-foret-headshot.webp"
            alt="Dustin Foret"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Bio */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <h1 className="text-3xl font-semibold">Dustin Foret</h1>
          
          <div className="space-y-4 text-base leading-relaxed font-light">
            <p>
              Dustin Foret (b. 1995, Alameda, CA) is a director and editor living and working in Brooklyn, NY. 
              Working across narrative, documentary, and commercial projects, Dustin focuses his stories on 
              aspirations and failures, characters drowning in the maelstrom of chaos that is a byproduct of 
              an unexplained and unpredictable world with a dash of bleak humor. His work won him the NIMS 
              Scholarship from the UNO NIMS Foundation.
            </p>
            
            <p>
              He is finding his way after returning to form from a hiatus taken because of a death in the 
              family during the SAG/WGA strikes of 2023. Much like the characters in his stories, he trenches 
              through the maelstrom in pursuit of art.
            </p>
            
            <p>
              He&apos;s currently crafting a feature drama, <i>To Be Declared Undead</i>, where the lines between 
              the living and the dead blur in unexpected ways.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 