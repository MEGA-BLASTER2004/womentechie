import React from 'react'

function Accordion() {
  return (
    <div className="w-11/12">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item border border-orange-100 bg-orange-100">
          <h2 class="accordion-header mb-0" id="headingOne">
            <button
              class="
          accordion-button
          relative
          flex
          w-full
          items-center
          rounded-none
          border-0
         bg-orange-100 py-4
          px-5
          text-left
          text-base
          text-orange-600
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span className="text-orange-600">
                Do I need to pay any money to register for the Hackathon?
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="collapse accordion-collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body py-4 px-5 text-orange-600">
              <strong>No,</strong> <br /> You do not have to pay anything to
              anyone to register yourself for any Hackathon on HackerEarth.
            </div>
          </div>
        </div>
        <div class="accordion-item border border-pink-200 bg-white">
          <h2 class="accordion-header mb-0" id="headingTwo">
            <button
              class="
          collapsed
          accordion-button
          relative
          flex
          w-full
          items-center
          rounded-none
          border-0
          bg-pink-100 py-4 px-5
          text-left
          text-base
          text-pink-600
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span className="text-pink-600">
                I am interested to participate but i am unable to find a
                team...What should i do?
              </span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="collapse accordion-collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body bg-pink-100 py-4 px-5 text-pink-600">
              You can try finding like minded people on our{' '}
              <strong>Discord Server</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item border border-gray-200 bg-white">
          <h2 class="accordion-header mb-0" id="headingThree">
            <button
              class="
          collapsed
          accordion-button
          relative
          flex
          w-full
          items-center
          rounded-none
          border-0
          bg-purple-100 py-4 px-5
          text-left
          text-base
          text-purple-600
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <span className="text-purple-600">
                How do i submit what i have made for the Hackathon?
              </span>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="collapse accordion-collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body bg-purple-100 py-4 px-5 text-purple-600">
              The entire idea <strong>need not to be fully implemented</strong>{' '}
              however,
              <br /> The submission should be <strong>functional</strong> so
              that it can be reviewed by the judges
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
