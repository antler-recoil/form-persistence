  const [firstName, setFirstName] = useLocalStorage('draft:firstName', '');
  const [lastName, setLastName] = useLocalStorage('draft:lastName', '');
  const [email, setEmail] = useLocalStorage('draft:email', '');
  const [bio, setBio] = useLocalStorage('draft:bio', '');

    setFirstName('');
    setLastName('');
    setEmail('');
    setBio('');