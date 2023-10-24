import React from "react";

export default function CardSettings() {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
          <button className="settings-button">Settings</button>
        </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <CardSection title="User Information">
            <div className="flex flex-wrap">
              <FormField label="Username" type="text" defaultValue="lucky.jesse" />
              <FormField label="Email address" type="email" defaultValue="jesse@example.com" />
              <FormField label="First Name" type="text" defaultValue="Lucky" />
              <FormField label="Last Name" type="text" defaultValue="Jesse" />
            </div>
          </CardSection>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <CardSection title="Contact Information">
            <div className="flex flex-wrap">
              <FormField label="Address" type="text" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
              <FormField label="City" type="text" defaultValue="New York" />
              <FormField label="Country" type="text" defaultValue="United States" />
              <FormField label="Postal Code" type="text" defaultValue="Postal Code" />
            </div>
          </CardSection>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <CardSection title="About Me">
            <div className="flex flex-wrap">
              <FormField
                label="About me"
                type="textarea"
                rows={4}
                defaultValue="A beautiful UI Kit and Admin for NextJS & Tailwind CSS. It is Free and Open Source."
              />
            </div>
          </CardSection>
        </form>
      </div>
    </div>
  );
}

function CardSection({ title, children }: ICardSection) {
  return (
    <div>
      <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">{title}</h6>
      {children}
    </div>
  );
}

function FormField({ label, type, rows, defaultValue }: ICardForm) {
  return (
    <div className="w-full lg:w-6/12 px-4">
      <div className="relative w-full mb-3">
        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
          {label}
        </label>
        {type === "textarea" ? (
          <textarea
            className="input-style"
            rows={rows}
            defaultValue={defaultValue}
          ></textarea>
        ) : (
          <input className="input-style" type={type} defaultValue={defaultValue} />
        )}
      </div>
    </div>
  );
}
