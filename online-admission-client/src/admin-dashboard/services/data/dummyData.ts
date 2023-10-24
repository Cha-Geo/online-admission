const HostelStatistics = {
  Income: {
    Title: "Income",
    Total: "350,897",
    Percentage: 3.48,
    PercentColor: "text-emerald-500",
    Descripiron: "Since last month",
    Arrow: "up",
  },
  Withdrawal: {
    Title: "Withdrawal",
    Total: "2,356",
    Percentage: 3.48,
    PercentColor: "text-red-500",
    Descripiron: "Since last month",
    Arrow: "down",
  },
  Reservation: {
    Title: "Reservation",
    Total: "1000",
    Percentage: 1.48,
    PercentColor: "text-orange-500",
    Descripiron: "Since last month",
    Arrow: "right",
  },
  RoomType: {
    Title: "Room Types",
    Total: "49,65",
    Percentage: 12,
    PercentColor: "text-emerald-500",
    Descripiron: "Since last month",
    Arrow: "up",
  },
  Room: {
    Title: "Rooms",
    Total: "359",
    Percentage: 0.48,
    PercentColor: "text-emerald-500",
    Descripiron: "Since last month",
    Arrow: 'up',
  },
};

const HostelsColumns = [
  "NAME",
  "PHONE",
  "EMAIL",
  "REGION",
  "CITY",
  "MAP URL",
  "DIGITAL ADDRESS",
  "BOOKING DURATION",
  "IS PRIVATE",
  "IS VERIFIED",
  "IS FEATURED",
  "STATUS",
  "AFFILIATED INSTITUTION",
  "ACCOMMODATION TYPE",
  "GENERAL DESCRIPTION",
  "SECURITY DESCRIPTION",
  "FACILITY DESCRIPTION",
  "LOCATION DESCRIPTION",
  "LIVE STATUS",
  "FEATURE STATUS",
  "VERIFY STATUS",
  "EDIT",
  "DELETE",
];


const StudentsColumns = [
  "FullNAME",
  "EMAIL ADDRESS",
  "PHONE NUMBER",
  "GENDER",
  "NUMBER OF OPTIONS",
  "NUMBER OF USED OPTIONS",
  "UNIQUE CODE",
  "IS ACTIVE",
  "ACCESS LEVEL",
  "NAME OF ACCESS LEVEL",
  "DATE REGISTERED",
  "UPDATE STUDENT",
  "DELETE STUDENT",
];

const BulkStudentsColumns = [
  "FIRST NAME",
  "OTHER NAME",
  "PHONE NUMBER",
  "EMAIL ADDRESS",
  "GENDER",
  "PROGRAME OF STUDY",
  "LEVEL OF STUDY",
  "STUDENT ID",
  "HOSTEL(S)",
];

const HostelRows = [
  {
    //1,
    fullName: "George Acquah",
    phoneNumber: "233558299409",
    emailAddress: "japhetkuntublankson1@gmail.com",
    rgion: "Western Region",
    city: "Tarkwa",
    affiliatedSchool: "UMaT",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d5782.970568824879!2d-2.0054432501894937!3d5.299045723736723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d5.2981671!2d-1.9974939999999999!4m5!1s0xfdd6e0e44a4c71b%3A0x370f8ff00a9cf057!2sUniversity%20of%20Mines%20and%20Technology%2C%20Tarkwa%20-%20Esiama%20Road%2C%20Tarkwa!3m2!1d5.2984262!2d-2.0012773999999998!5e0!3m2!1sen!2sgh!4v1668012128249!5m2!1sen!2sgh",
    ghanaPostCode: "WS-0084-2237",
    hostelType: "Hostel",
    introduction: "",
    description:
      "Across from the Dynamite FM building in Tarkwa's northeast is where you'll find the Comfort Hostel. The hostel has rooms that are very cozy. Wireless internet is available in every room. Private bathrooms and roomy workstations are provided in every standard room. A no-smoking hostel is this one. Being able to stay for affordable prices is what sets the Comfort Hostel apart. We kindly extend our invitation for a wonderful lodging experience.",
    securityDetail:
      "In order to give students additional security, the hostel is situated in a relatively secure area and is walled.",
    facilityDetail:
      "In addition to a communal kitchen on each floor, this hostel's rooms each have their own bathroom and toilet. It can brag of a steady water supply because it has a huge polytank to store water in case of supply problems.",
    locationDetail:
      "It takes just nine minutes to walk from this hostel to the main entrance of the University of Mines and Technology. Due to its Google Maps location and proximity to an FM station, a landmark, renters may quickly discover it if they get lost.",
    hostelStatus: "Online",
  },
  {
    //2,
    fullName: "Japhet Kuntu Blankson",
    phoneNumber: "233558299409",
    emailAddress: "japhetkuntublankson1@gmail.com",
    rgion: "Western Region",
    city: "Tarkwa",
    affiliatedSchool: "UMaT",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d6877.13349072633!2d-2.0036864524991707!3d5.300505683772325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d5.3006999!2d-1.9994705!4m5!1s0xfdd6e0e44a4c71b%3A0x370f8ff00a9cf057!2sUniversity%20of%20Mines%20and%20Technology%2C%20Tarkwa%20-%20Esiama%20Road%2C%20Tarkwa!3m2!1d5.2984262!2d-2.0012773999999998!5e0!3m2!1sen!2sgh!4v1668014230561!5m2!1sen!2sgh",
    ghanaPostCode: "WS-0084-2237",
    hostelType: "Hostel",
    introduction: "",
    description:
      "Across from the Dynamite FM building in Tarkwa's northeast is where you'll find the Comfort Hostel. The hostel has rooms that are very cozy. Wireless internet is available in every room. Private bathrooms and roomy workstations are provided in every standard room. A no-smoking hostel is this one. Being able to stay for affordable prices is what sets the Comfort Hostel apart. We kindly extend our invitation for a wonderful lodging experience.",
    securityDetail:
      "In order to give students additional security, the hostel is situated in a relatively secure area and is walled.",
    facilityDetail:
      "In addition to a communal kitchen on each floor, this hostel's rooms each have their own bathroom and toilet. It can brag of a steady water supply because it has a huge polytank to store water in case of supply problems.",
    locationDetail:
      "It takes just nine minutes to walk from this hostel to the main entrance of the University of Mines and Technology. Due to its Google Maps location and proximity to an FM station, a landmark, renters may quickly discover it if they get lost.",
    hostelStatus: "Online",
  },
  {
    //3,
    fullName: "George Acquah",
    phoneNumber: "233558299409",
    emailAddress: "japhetkuntublankson1@gmail.com",
    rgion: "Western Region",
    city: "Tarkwa",
    affiliatedSchool: "UMaT",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d4089.1853725889355!2d-1.9984353975352993!3d5.297887216754679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d5.2968261!2d-1.9965800999999999!4m5!1s0xfdd6e0e44a4c71b%3A0x370f8ff00a9cf057!2sUniversity%20of%20Mines%20and%20Technology%2C%20Tarkwa%20-%20Esiama%20Road%2C%20Tarkwa!3m2!1d5.2984262!2d-2.0012773999999998!5e0!3m2!1sen!2sgh!4v1668014828258!5m2!1sen!2sgh",
    ghanaPostCode: "WS-0084-2237",
    hostelType: "Hostel",
    introduction: "",
    description:
      "Across from the Dynamite FM building in Tarkwa's northeast is where you'll find the Comfort Hostel. The hostel has rooms that are very cozy. Wireless internet is available in every room. Private bathrooms and roomy workstations are provided in every standard room. A no-smoking hostel is this one. Being able to stay for affordable prices is what sets the Comfort Hostel apart. We kindly extend our invitation for a wonderful lodging experience.",
    securityDetail:
      "In order to give students additional security, the hostel is situated in a relatively secure area and is walled.",
    facilityDetail:
      "In addition to a communal kitchen on each floor, this hostel's rooms each have their own bathroom and toilet. It can brag of a steady water supply because it has a huge polytank to store water in case of supply problems.",
    locationDetail:
      "It takes just nine minutes to walk from this hostel to the main entrance of the University of Mines and Technology. Due to its Google Maps location and proximity to an FM station, a landmark, renters may quickly discover it if they get lost.",
    hostelStatus: "Offline",
  },
  {
    //4,
    fullName: "Japhet Kuntu Blankson",
    phoneNumber: "233558299409",
    emailAddress: "japhetkuntublankson1@gmail.com",
    rgion: "Western Region",
    city: "Tarkwa",
    affiliatedSchool: "UMaT",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d6877.13349072633!2d-2.0036864524991707!3d5.300505683772325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d5.3006999!2d-1.9994705!4m5!1s0xfdd6e0e44a4c71b%3A0x370f8ff00a9cf057!2sUniversity%20of%20Mines%20and%20Technology%2C%20Tarkwa%20-%20Esiama%20Road%2C%20Tarkwa!3m2!1d5.2984262!2d-2.0012773999999998!5e0!3m2!1sen!2sgh!4v1668014230561!5m2!1sen!2sgh",
    ghanaPostCode: "WS-0084-2237",
    hostelType: "Hostel",
    introduction: "",
    description:
      "Across from the Dynamite FM building in Tarkwa's northeast is where you'll find the Comfort Hostel. The hostel has rooms that are very cozy. Wireless internet is available in every room. Private bathrooms and roomy workstations are provided in every standard room. A no-smoking hostel is this one. Being able to stay for affordable prices is what sets the Comfort Hostel apart. We kindly extend our invitation for a wonderful lodging experience.",
    securityDetail:
      "In order to give students additional security, the hostel is situated in a relatively secure area and is walled.",
    facilityDetail:
      "In addition to a communal kitchen on each floor, this hostel's rooms each have their own bathroom and toilet. It can brag of a steady water supply because it has a huge polytank to store water in case of supply problems.",
    locationDetail:
      "It takes just nine minutes to walk from this hostel to the main entrance of the University of Mines and Technology. Due to its Google Maps location and proximity to an FM station, a landmark, renters may quickly discover it if they get lost.",
    hostelStatus: "Offline",
  },
  {
    //5,
    fullName: "George Acquah",
    phoneNumber: "233558299409",
    emailAddress: "japhetkuntublankson1@gmail.com",
    rgion: "Western Region",
    city: "Tarkwa",
    affiliatedSchool: "UMaT",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d5782.970568824879!2d-2.0054432501894937!3d5.299045723736723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d5.2981671!2d-1.9974939999999999!4m5!1s0xfdd6e0e44a4c71b%3A0x370f8ff00a9cf057!2sUniversity%20of%20Mines%20and%20Technology%2C%20Tarkwa%20-%20Esiama%20Road%2C%20Tarkwa!3m2!1d5.2984262!2d-2.0012773999999998!5e0!3m2!1sen!2sgh!4v1668012128249!5m2!1sen!2sgh",
    ghanaPostCode: "WS-0084-2237",
    hostelType: "Hostel",
    introduction: "",
    description:
      "Across from the Dynamite FM building in Tarkwa's northeast is where you'll find the Comfort Hostel. The hostel has rooms that are very cozy. Wireless internet is available in every room. Private bathrooms and roomy workstations are provided in every standard room. A no-smoking hostel is this one. Being able to stay for affordable prices is what sets the Comfort Hostel apart. We kindly extend our invitation for a wonderful lodging experience.",
    securityDetail:
      "In order to give students additional security, the hostel is situated in a relatively secure area and is walled.",
    facilityDetail:
      "In addition to a communal kitchen on each floor, this hostel's rooms each have their own bathroom and toilet. It can brag of a steady water supply because it has a huge polytank to store water in case of supply problems.",
    locationDetail:
      "It takes just nine minutes to walk from this hostel to the main entrance of the University of Mines and Technology. Due to its Google Maps location and proximity to an FM station, a landmark, renters may quickly discover it if they get lost.",
    hostelStatus: "Online",
  },
];

const ManagersColumns = [
  "ID",
  "NAME",
  "PHONE NUMBER",
  "EMAIL",
  "GENDER",
  "ACCOUNT NUMBER",
  "ACCOUNT TYPE",
  "ACCOUNT NAME",
  "ACCOUNT CODE",
  "HAS PAYMENT DETAILS",
  "VERIFIED PAYMENT DETAILS",
  "DATE CREATED",
];

const TenantsColumns = [
  "ID",
  "NAME",
  "PHONE NUMBER",
  "EMAIL",
  "GENDER",
  "DATE CREATED",
];
const AdminsColumns = [
  "ID",
  "NAME",
  "PHONE NUMBER",
  "EMAIL",
  "GENDER",
  "DATE CREATED",
];
const UnverifiedUsersColumns = [
  "ID",
  "NAME",
  "PHONE NUMBER",
  "EMAIL",
  "ROLE",
  "DATE CREATED",
];


export {
  HostelStatistics,
  HostelsColumns,
  HostelRows,
  StudentsColumns,
  BulkStudentsColumns,
  ManagersColumns,
  TenantsColumns,
  UnverifiedUsersColumns,
  AdminsColumns,
};
