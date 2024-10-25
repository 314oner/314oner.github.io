import {
  DefaultAlert,
  DefaultAvatar,
  DefaultBadge,
  DefaultCard,
  DefaultCheckbox,
  DefaultDropdown,
  DefaultModal,
  DefaultRadioButton,
  RefButton as MyDefaultLongButton,
} from '@314oner_npm/universal-components-library';
import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Dropdown,
  Label,
  Modal,
  Radio,
  TextInput,
} from 'flowbite-react';
import { useState } from 'react';

export default function ButtonsPrototyping() {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl">
        <div className="flex flex-col justify-center flex-1 px-px">
          <h2 className="text-2xl">Want to learn more about JavaScript?</h2>
          <p className="my-2 text-gray-500">Thirdparty button</p>
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-bl-none rounded-tl-xl"
          >
            <a
              href="https://flowbite-react.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              N JavaScript Projects
            </a>
          </Button>
        </div>
        <div className="flex flex-col justify-center flex-1 px-px">
          <h2 className="text-2xl">Yes yes yes</h2>
          <p className="my-2 text-gray-500">My custom button</p>
          <MyDefaultLongButton
            className="enabled:hover:bg-gradient-to-l bg-gradient-to-r from-purple-500 to-pink-500"
            size="small"
            onClick={() => {
              console.log('MyDefaultLongButton clicked');
            }}
          >
            <a
              href="https://github.com/314oner/universal-components-library"
              target="_blank"
              rel="noopener noreferrer"
            >
              One library to understand everything
            </a>
          </MyDefaultLongButton>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl">
        <div className="flex flex-col justify-center flex-1 px-px">
          <Alert color="info">
            <span className="font-medium">Info alert!</span> Change a few things
            up and try submitting again.
          </Alert>
        </div>
        <div className="flex flex-col justify-center flex-1 px-px">
          <DefaultAlert
            type={'info'}
            message={
              'Info alert! Change a few things up and try submitting again.'
            }
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl">
        <div className="flex flex-col justify-center flex-1 px-px">
          <Avatar
            img="https://www.gstatic.com/webp/gallery3/2_webp_a.png"
            alt="avatar of pinguin"
            rounded
          />
        </div>
        <div className="flex flex-col justify-center flex-1 px-px">
          <DefaultAvatar
            src={'https://www.gstatic.com/webp/gallery3/2_webp_a.png'}
            alt={'avatar of pinguin, again'}
            size={'small'}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl">
        <div className="flex flex-col justify-center flex-1 px-px">
          <Badge color="info">Badge</Badge>
        </div>
        <div className="flex flex-col justify-center flex-1 px-px">
          <DefaultBadge
            color="red"
            className="dark:text-white"
            text={'Badge'}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl">
        <div className="flex flex-col justify-center flex-1 px-px">
          <Card
            imgSrc="https://www.gstatic.com/webp/gallery3/2_webp_a.png"
            href="#"
            className="max-w-sm"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              FlowbiteCard title
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="flex flex-col justify-center flex-1 px-px">
          <DefaultCard
            title={'DefaultCard title'}
            description={
              'Here are the biggest enterprise technology acquisitions of 2021 sofar, in reverse chronological order.'
            }
            imageUrl={'https://www.gstatic.com/webp/gallery3/2_webp_a.png'}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl">
        <div className="flex flex-col justify-center flex-1 px-px">
          <form className="flex flex-col max-w-md gap-4">
            <div>
              <div className="block mb-2">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <div className="block mb-2">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" required />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">FlowbiteCheckbox label</Label>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
        <div className="flex flex-col justify-center flex-1 px-px">
          <form className="flex flex-col max-w-md gap-4">
            <div>
              <div className="block mb-2">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="name@314oner.github.io"
                required
              />
            </div>
            <div>
              <div className="block mb-2">
                <Label htmlFor="password2" value="Your password" />
              </div>
              <TextInput id="password2" type="password" required />
            </div>
            <div className="flex items-center gap-2">
              <DefaultCheckbox
                label={'DefaultCheckbox label'}
                onChange={() => {
                  console.log('DefaultCheckbox form state changed');
                }}
              />
            </div>
            <MyDefaultLongButton
              className="rounded-lg focus:ring-cyan-300 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700"
              type="submit"
            >
              Submit
            </MyDefaultLongButton>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl">
        <div className="flex flex-col justify-center flex-1 px-px">
          <Dropdown label="FlowbiteDropdown options" dismissOnClick={false}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="flex flex-col justify-center flex-1 px-px">
          <DefaultDropdown
            placeholder="DefaultDropdown options"
            options={['Dashboard', 'Settings', 'Earnings', 'Sign out']}
            onSelect={() => {
              console.log('DefaultDropdown option selected');
            }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl">
        <div className="flex flex-col justify-center flex-1 px-px">
          <>
            <Button onClick={() => setOpenModal(true)}>
              Toggle FlowbiteModal
            </Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header>Terms of Service</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, saepe?
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis laboriosam unde ea possimus provident repellendus enim
                    voluptates magni maxime molestias excepturi voluptatum, quo
                    doloremque pariatur laudantium illum, earum eligendi
                    deleniti debitis. Odio molestiae, qui sapiente fuga quae
                    quibusdam eaque eligendi!
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => setOpenModal(false)}>I accept</Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Decline
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
        <div className="flex flex-col justify-center flex-1 px-px">
          <Button onClick={() => setOpenModal2(true)}>
            Toggle DefaultModal
          </Button>
          <DefaultModal
            isOpen={openModal2}
            onClose={() => setOpenModal2(false)}
            title={'Terms of Service'}
            children={
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, saepe?
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  laboriosam unde ea possimus provident repellendus enim
                  voluptates magni maxime molestias excepturi voluptatum, quo
                  doloremque pariatur laudantium illum, earum eligendi deleniti
                  debitis. Odio molestiae, qui sapiente fuga quae quibusdam
                  eaque eligendi!
                </p>
              </div>
            }
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl">
        <div className="flex flex-col justify-center flex-1 px-px">
          <fieldset className="flex flex-col max-w-md gap-4">
            <legend className="mb-4">Choose your destiny</legend>
            <div className="flex items-center gap-2">
              <Radio
                id="flowbiteRadioButton1"
                name="countries"
                value="FlowbiteRadioButton"
              />
              <Label htmlFor="flowbiteRadioButton1">FlowbiteRadioButton</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="flowbiteRadioButton2"
                name="countries"
                value="FlowbiteRadioButton"
              />
              <Label htmlFor="flowbiteRadioButton2">FlowbiteRadioButton</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="flowbiteRadioButton3"
                name="countries"
                value="FlowbiteRadioButton"
                disabled
              />
              <Label htmlFor="flowbiteRadioButton3" disabled>
                FlowbiteRadioButton(disabled)
              </Label>
            </div>
          </fieldset>
        </div>
        <div className="flex flex-col justify-center flex-1 px-px">
          <fieldset className="flex flex-col max-w-md gap-4">
            <legend className="mb-4">Choose your destiny</legend>
            <div className="flex items-center gap-2">
              <DefaultRadioButton
                label={'DefaultRadioButton'}
                name={'DefaultRadioButton'}
                value={'DefaultRadioButton'}
              />
            </div>
            <div className="flex items-center gap-2">
              <DefaultRadioButton
                label={'DefaultRadioButton'}
                name={'DefaultRadioButton'}
                value={'DefaultRadioButton'}
              />
            </div>
            <div className="flex items-center gap-2">
              <DefaultRadioButton
                label={'DefaultRadioButton(disabled)'}
                name={'DefaultRadioButton'}
                value={'DefaultRadioButton'}
                disabled
              />
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}