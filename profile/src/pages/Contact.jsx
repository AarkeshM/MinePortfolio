import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import Loader from '../components/Loader';
import Fox from '../models/Fox';
import { Canvas } from '@react-three/fiber';

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { showAlert, alert, hideAlert } = useAlert();
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm((currForm) => {
      return { ...currForm, [name]: value };
    });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs.send("service_2frr4or", "template_gnbwdzb", {
      from_name: form.name,
      to_name: "Aarkesh",
      from_email: form.email,
      to_email: "aarkeshcse2023@ksrce.ac.in",
      message: form.message,
    }, "wMnDbDk4AGh1WuAvW")
      .then(() => {
        setLoading(false);
        showAlert({
          show: true,
          text: "Thank you for your message 😊.",
          type: "Success",
        });

        setTimeout(() => {
          hideAlert(false);
          setCurrentAnimation("idle");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setCurrentAnimation("idle");
        showAlert({
          show: true,
          text: "I didn't receive your message 😞.",
          type: "dnager",
        });
      });
  };

  return (

    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7 mt-14">
          <label className='text-black-500 font-semibold'>
            Name
            <input type="text" name='name' className='input' placeholder='Aarkesh' required value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <label className='text-black-500 font-semibold' >
            Email
            <input type="email" name='email' className='input' placeholder='aarkesh@gmail.com' required value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea name="message" rows={4} className='textarea' placeholder='Write your thoughts here.....' required value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>

          <button type='submit' className='btn' disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        <div className='mt-10 text-gray-500 font-bold text-xl'>
         Call me 🤙🏻: +91 9789143167
        </div>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [1, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={1} />
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 10, 0]} intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={-0.5} />
          <Suspense fallback={<Loader />}>
            <Fox currentAnimation={currentAnimation} position={[0.59,0.35,0]} scale={[0.55,0.55,0.55]} rotation={[12.629, -0.4, 0]} />
          </Suspense>

        </Canvas>

      </div>
    </section>
  );
};

export default Contact