import * as moment from "moment"
import * as React from "react"
import "react-native"
import * as renderer from "react-test-renderer"

import Message from "../Message"

it("looks correct when rendered", () => {
  // tslint:disable-next-line:max-line-length
  const messageBody =
    "Hi, I'm interested in purchasing this work. Could you please provide more information about the piece, including price?"
  const senderName = "Sarah"
  const props = {
    key: 0,
    created_at: moment().subtract(30, "minutes").toISOString(),
    body: messageBody,
    is_from_user: true,
    attachments: [],
    from: {
      name: "Percy",
      email: "percy@cat.com",
    },
  }
  const tree = renderer.create(<Message senderName={senderName} message={props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
