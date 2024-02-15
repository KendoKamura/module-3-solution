var names=new Array();
names[0]="Yakov";
names[1]="Jainam";
names[2]="Jaimin";
names[3]="jainesh";
names[4]="patrik";
names[5]="sarthak";
names[6]="lakshman";
names[7]="pratik";
names[8]="lara";
names[9]="jay";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}