import React, { Component } from "react";
// components/styles
import styles from "./styles/Routes.module.css";
import IconRoundUser from "../../shared-components/IconRoundUser";

class Community extends Component {
  componentDidMount() {
    this.props.getCommunityAction();
  }
  render() {
    const { community } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.tab}>
          <h1 className={styles.title}>Community</h1>
          <ul className={styles.row_container}>
            {community &&
              community.map(user => {
                return (
                  <li key={user.id} className={styles.row}>
                    <div className={styles.row_left}>
                      <IconRoundUser className={styles.row_left__icon} />
                    </div>
                    <div className={styles.row_right}>
                      <h4 className={styles.row_right__top}>{user.fullname}</h4>
                      <p className={styles.row_right__bottom}>{user.status}</p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Community;
