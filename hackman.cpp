#include<bits/stdc++.h>
#include<string>
using namespace std;
class hospital
{
    public:
    string H_name;
    string location;
    int available_beds;
    float rating;
    string contact;
    string doctor_name;
    int price;
};
class Patient: public hospital
{
    public:
    string P_name;
    int P_id;
} ;
void printhospitaldata(vector<hospital>&hospitals)
{
    cout << "PRINT hospitals DATA:"
         << endl;

    cout << "HospitalName     "
         << "Location     "
         << "Beds_Available     "
         << "Rating     "
         << "Hospital_Contact     "
         << "Doctor_Name     "
         << "Price_Per_Bed     \n";
for (int i = 0; i < 4; i++) {
        cout << hospitals[i].H_name
             << "                 "
             << "        "
             << hospitals[i].location
             << "           "
             << hospitals[i].available_beds
             << "                    "
             << hospitals[i].rating
             << "            "
             << hospitals[i].contact
             << "             "
             << hospitals[i].doctor_name
             << "                  "
             << "        "
             << hospitals[i].price
             << "            "
             << endl;
    }
    cout << endl
         << endl;
}
void PrintPatientData(
    vector<Patient>& patients,
    vector<Hospital>& hospitals)
{
    cout << "PRINT patients DATA:"
         << endl;
    cout << "Patient_Name     "
         << "Patient_Id     "
         << "Patient_Contact     "
         << "Alloted_Hospital     "
         << "Patient_Expenditure     \n";
